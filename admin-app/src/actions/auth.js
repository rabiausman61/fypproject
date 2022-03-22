import axios from "../helpers/axios";
import { authConstants } from "./constants";

export const login = (admin) => {
  console.log(admin);
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
    });
    const res = await axios.post(`/adminauth/admin/signin`, {
      ...admin,
    });

    if (res.status === 200) {
      const { authToken, admin } = res.data;
      localStorage.setItem("admin", JSON.stringify(admin));
      localStorage.setItem("token", authToken);
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          authToken,
          admin,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    }
  };
};
export const isUserLogin = () => {
  return async (dispatch) => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      const admin = JSON.parse(localStorage.getItem("admin"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          authToken,
          admin,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: "Failed to login :(",
        },
      });
    }
  };
};
