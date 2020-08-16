import createDataContext from "./createDataContext";
import randomUsersApi from "../api/randomUsers";
import { navigate } from "../navigationRef";

const usersReducer = (state, action) => {
  switch (action.type) {
    case "add_users":
      return action.payload;
    default:
      return state;
  }
};

const getUsers = (dispatch) => async (callback) => {
  try {
    const response = await randomUsersApi.get("/?results=15");
    dispatch({ type: "add_users", payload: response.data.results });
    navigate("Home");
  } catch (err) {
    console.log("Error:", err);
  }
};

const removeUser = (dispatch) => () => {};

export const { Context, Provider } = createDataContext(
  usersReducer,
  { getUsers, removeUser },
  []
);
