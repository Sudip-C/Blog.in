import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS } from "./actionType";
import {API_URL} from '../API/Api.js'
import axios from "axios";


export const addPost = (post) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_POST_REQUEST });

    const { auth } = getState();  
    const token = await auth.getToken();

    const response = await axios.post(`${API_URL}/api/blogs`, post ,{
      headers: {
        Authorization: `Bearer ${token}`,  
      },
    });

    dispatch({
      type: ADD_POST_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: ADD_POST_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
