import React, { useState, useEffect } from "react";

function Home() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = sessionStorage.getItem("currentUser");
    const temp = JSON.parse(localStorage.getItem(data));
    setUser(temp);
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center">
        {" "}
        <img
          src="https://st.depositphotos.com/2745455/4383/v/450/depositphotos_43831043-stock-illustration-blogging-concept-illustration.jpg"
          className="card1 m-2 h-auto w-50 rounded "
          alt=""
        ></img>
      </div>
    </>
  );
}
export default Home;
