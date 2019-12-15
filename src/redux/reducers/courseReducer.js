import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      //   state.push(action.course); //This mutates state, hence it's not used
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
