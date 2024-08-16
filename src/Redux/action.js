import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS } from "./actionType";
import {API_URL} from '../API/Api.js'
import axios from "axios";


export const addPost = (post) => async (dispatch) => {
  try {
    // Dispatching request action
    dispatch({ type: ADD_POST_REQUEST });

   
    const response = await axios.post(`${API_URL}/api/blogs`, post);

    dispatch({
      type: ADD_POST_SUCCESS,
      payload: response,
    });
  } catch (error) {
    // Dispatching failure action with error message
    dispatch({
      type: ADD_POST_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
