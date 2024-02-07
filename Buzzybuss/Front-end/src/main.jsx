import React from "react";
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
import store from "./store/store";
import { Provider } from "react-redux";
import GetMyBlog from "./pages/GetMyBlog.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="get-blog" element={<GetBlog />} />
        <Route path="create-blog" element={<CreateBlog />} />
        <Route path="about" element={<About />} />
        <Route path="get-my-blog" element={<GetMyBlog />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
