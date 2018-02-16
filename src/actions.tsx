import { Dispatch } from "redux";
import { TActions } from "./interfaces";

export const RECEIVED_POSTS = "RECEIVED_POSTS";
export const LOADING_POSTS = "LOADING_POSTS";

export const actionCreators = {
  loadingPosts(loading: boolean) {
    return {
      type: LOADING_POSTS,
      loading
    };
  },

  receivedPosts(data: any) {
    return {
      type: RECEIVED_POSTS,
      data
    };
  }
};

export const fetchPosts = (id: string) => (dispatch: Dispatch<TActions>) => {
  console.log("fetchPosts", id);
  dispatch(actionCreators.loadingPosts(true));
  return fetch(`https://www.reddit.com/r/${id}.json`)
    .then(response => response.json())
    .then(json => {
      dispatch(actionCreators.loadingPosts(false));
      let parsed = json.data.children.map((child: any) => child.data);
      return dispatch(actionCreators.receivedPosts(parsed));
    });
};
