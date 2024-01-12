import React, { useState } from "react";

function GetBlog() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <input type="file" onChange={handleImageChange} />
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt="Selected"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn btn-primary">ADD</button>
      </div>
    </div>
  );
}

export default GetBlog;
