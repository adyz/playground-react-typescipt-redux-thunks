import { IState, TActions } from "./interfaces";
import { LOADING_POSTS, RECEIVED_POSTS } from "./actions";

const initalState = {
  appName: "Test from the root state",
  posts: [],
  loading: false
};

export function reducer(state: IState = initalState, action: TActions): IState {
  console.log("Reducer here", action.type);
  switch (action.type) {
    case LOADING_POSTS: {
      return {
        ...state,
        loading: action.loading
      };
    }
    case RECEIVED_POSTS: {
      return {
        ...state,
        posts: action.data,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
