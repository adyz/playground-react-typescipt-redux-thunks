import * as React from "react";
import { TActions, IState, IPost } from "./interfaces";

import { fetchPosts } from "./actions";

import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";

interface IProps {
  name?: string;
  appName: string;
  posts: IPost[];
  loading: boolean;
  fetchPosts: (id: string) => Dispatch<TActions>;
}
class App extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={() => this.props.fetchPosts("web")}>
          Load from remote
        </button>

        {this.props.loading && <p>Loading...</p>}

        {this.props.posts.length > 0 &&
          !this.props.loading && (
            <ul>
              {this.props.posts.map(post => (
                <li key={post.id}>{post.selftext}</li>
              ))}
            </ul>
          )}
      </div>
    );
  }
}

const mapStateToProps = (rootState: IState) => {
  return {
    posts: rootState.posts,
    loading: rootState.loading,
    appName: rootState.appName
  };
};

const mapDispatchToProps = (dispatch: Dispatch<TActions>) =>
  bindActionCreators(
    {
      fetchPosts
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
