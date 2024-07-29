import { ADD_POST_SUCCESS } from "./actionType";


const initialState = {
    posts: [],
  };
  
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST_SUCCESS:
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default blogReducer;