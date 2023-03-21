import { loginFailure, loginStart, loginSuccess } from "./slices/userSlice";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  };
};

export async function logoutUser() {
  return await publicRequest.get('/auth/logout');
};

export async function onRegistration(registrationData) {
  return await publicRequest.post('/auth/register', registrationData);
};
