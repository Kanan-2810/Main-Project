const setBlog = (blog) => {
  return {
    type: "set-blog",
    payload: blog,
  };
};

export default setBlog;
