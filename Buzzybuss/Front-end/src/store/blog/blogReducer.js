const initialState = {
  blog: [
    {
      _id: "",
      title: "",
      description: "",
      image: "",
      user: "",
    },
  ],
};

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case "set-blog":
      return { blog: action.payload };

    default:
      return state;
  }
}

export default blogReducer;
