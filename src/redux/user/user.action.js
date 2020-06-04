import { UserActionTypes } from "./user.type";
export const setCurrentUser = (user) => ({
  type: UserActionTypes.setCurrentUser,
  payload: user,
});
