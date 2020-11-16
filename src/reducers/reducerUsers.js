import * as Types from "../constants/ActionTypes";

const stateDefault = {
  users: [],
  registerUser: [],
  account: [],
  updateUser: [],
};

const findIndex = (account, _id) => {
  let result = -1;
  account.forEach((account, index) => {
    if (account._id === _id) {
      result = index;
    }
  });
  return result;
};

function reducerUsers(state = stateDefault, action) {
  var index = -1;
  var { _id } = action;
  let newState = { ...state };
  switch (action.type) {
    case Types.FETCH_DATA_USERS: {
      newState.users = action.users;
      return newState;
    }

    case Types.ADD_USER: {
      newState.users.push(action.user);
      return newState;
    }

    case Types.DELETE_USER: {
      index = findIndex(newState.users, _id);
      newState.users.splice(index, 1);
      return newState;
    }
    case Types.UPDATE_USER: {
      index = findIndex(newState.users, action.user._id);
      newState.users[index] = action.user;

      return newState;
    }

    default: {
      return state;
    }
  }
}

export default reducerUsers;
