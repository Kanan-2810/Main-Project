import React, { useState } from "react";
import BlogContext from "./BlogContext";

function BlogContextProvider({ children }) {
  const [blog, setBlog] = useState({});

  return (
    <BlogContext.Provider value={{ blog, setBlog }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogContextProvider;
