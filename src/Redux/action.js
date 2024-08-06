import { ADD_POST_SUCCESS } from "./actionType";

export const addPost = (post) => ({
  type: ADD_POST_SUCCESS,
  payload: post,
});
