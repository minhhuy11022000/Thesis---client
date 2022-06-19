import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  logOutStart,
  logOutSuccess,
  logOutFailed,
} from "../redux/authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log(res.data);
    navigate("/");
  } catch (err) {
    console.log(err.response.data);
    dispatch(loginFailed(err.response.data));
  }
};

export const registerUser = async (user, dispatch, handleChange) => {
  dispatch(registerStart());
  try {
    await axios.post("/auth/register", user);
    dispatch(registerSuccess());
    handleChange("event", "1");
  } catch (err) {
    dispatch(registerFailed());
  }
};

export const logOut = async (dispatch, navigate, id, accesstoken, axiosJWT) => {
  dispatch(logOutStart());
  try {
    await axiosJWT.post("/auth/logout", id, {
      headers: { token: `Bearer ${accesstoken}` },
    });
    dispatch(logOutSuccess());
    navigate("/auth/login");
  } catch (err) {
    dispatch(logOutFailed());
  }
};
