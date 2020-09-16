import { combineReducers } from "redux";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";

// function blog(state=initialState, action) {
//   switch(action.type) {
//     case FETCH_POSTS:
//      return state.map(posts, index) => {

//      }
//   }
// }

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
});
