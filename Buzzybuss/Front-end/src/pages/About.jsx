import React from "react";
import UserContext from "../context/UserContex";

function About() {
  return (
    <UserContext.Consumer>
      {({ user }) => {
        console.log("user:", user);

        return <h1>Welcome {user?.name}</h1>;
      }}
    </UserContext.Consumer>
  );
}

export default About;
