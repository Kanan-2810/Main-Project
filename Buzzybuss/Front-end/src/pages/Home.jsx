import React, { useState, useEffect } from "react";

function Home() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = sessionStorage.getItem("currentUser");
    const temp = JSON.parse(localStorage.getItem(data));
    setUser(temp);
  }, []);
  return <div>Welcome {user?.name}</div>;
}

export default Home;
