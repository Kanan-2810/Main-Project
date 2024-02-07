import React from "react";
import { useSelector } from "react-redux";

function About() {
  const user = useSelector((state) => state.userReducer);
  console.log("hg", user.user);
  return (
    <h1 style={{ width: "40rem", backgroundColor: "lightblue" }}>
      Welcome {user?.user?.name}
    </h1>
  );
}

export default About;
