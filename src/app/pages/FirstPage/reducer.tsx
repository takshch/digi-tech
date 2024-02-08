import { PostType } from './PostType';

export enum ActionTypes {
  ADD_POSTS = 'ADD_POSTS',
  SET_ERROR = 'SET_ERROR',
  SET_LOADING = 'SET_LOADING',
}

interface AddPostsAction {
  type: ActionTypes.ADD_POSTS;
  payload: PostType[];
}

interface SetErrorAction {
  type: ActionTypes.SET_ERROR;
  payload: undefined;
}

interface SetLoadingAction {
  type: ActionTypes.SET_LOADING;
  payload: undefined;
}

type PostReducerAction = AddPostsAction | SetErrorAction | SetLoadingAction;

type PostReducerState = {
  hasError: boolean;
  isLoading: boolean;
  posts: PostType[];
};

export const reducer = (state: PostReducerState, action: PostReducerAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.ADD_POSTS: {
      const posts = state.posts;
      return {
        hasError: false,
        isLoading: false,
        post: [posts, ...payload],
      };
    }
    case ActionTypes.SET_ERROR: {
      return Object.assign(state, { hasError: true, isLoading: false });
    }
    case ActionTypes.SET_LOADING: {
      return Object.assign(state, { hasError: false, isLoading: true });
    }
    default: {
      return state;
    }
  }
};
