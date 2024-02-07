const initialState = {
  user: {
    _id: "",
    name: "",
    email: "",
    password: "",
    blogs: [],
  },
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "set-user":
      return { user: action.payload };

    default:
      return state;
  }
}

export default userReducer;
