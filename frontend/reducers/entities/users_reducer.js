import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_ALL_VIDEOS, RECEIVE_SINGLE_VIDEO } from "../../actions/video_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_ALL_VIDEOS:
      return Object.assign({}, state, action.payload.users);
    case RECEIVE_SINGLE_VIDEO:
      newState = Object.assign({}, state);
      newState[action.payload.user.id] = action.payload.user;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;