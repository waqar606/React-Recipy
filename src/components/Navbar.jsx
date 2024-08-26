import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [input, setinput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  return (
    <>
      <div className="nav">
        <Link
          to={"/"}
          className="left"
          style={{ textDecoration: "None", color: "white" }}
        >
          <div className="div">
            <h1>React Recipy App </h1>
          </div>
        </Link>

        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => setinput(e.target.value)}
              placeholder="Search Recipy"
            />
          </form>
        </div>
        <div className="right">
          <Link to={`/category/indian`} className="link">
            <div className="item">Indian</div>
          </Link>
          <Link to={`/category/american`} className="link">
            <div className="item">American</div>
          </Link>
          <Link to={`/category/british`} className="link">
            <div className="item">British</div>
          </Link>
          <Link to={`/category/chinese`} className="link">
            <div className="item">Chinese</div>
          </Link>
          <Link to={`/category/thai`} className="link">
            <div className="item">Thai</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
