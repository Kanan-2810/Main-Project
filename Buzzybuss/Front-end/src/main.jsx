import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import GetBlog from "./pages/GetBlog.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";
import About from "./pages/About.jsx";
import BlogContextProvider from "./context/BlogContextProvider.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="get-blog" element={<GetBlog />} />
        <Route path="create-blog" element={<CreateBlog />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogContextProvider>
      <UserContextProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </UserContextProvider>
    </BlogContextProvider>
  </React.StrictMode>
);
