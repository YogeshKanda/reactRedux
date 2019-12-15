import * as types from "./actionTypes";

export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course // Since both left and right side has same name, right side can be removed. it is called "Object Shorthand Syntax"
  };
}
