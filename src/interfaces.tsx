import { RECEIVED_POSTS, LOADING_POSTS } from "./actions";
export interface IAReceivedPosts {
  type: typeof RECEIVED_POSTS;
  data: IPost[];
}

export interface IALoadingPosts {
  type: typeof LOADING_POSTS;
  loading: boolean;
}

export interface IPost {
  name: string;
  id: number;
}

export interface IState {
  appName: string;
  posts: IPost[];
  loading: boolean;
}

export type TActions = IAReceivedPosts | IALoadingPosts;
