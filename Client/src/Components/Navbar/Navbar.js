import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { GoLaw } from "react-icons/go";
import { FcSearch } from "react-icons/fc";

const styleLink = { textDecoration: "none", color: "white" };
const inputField = {
  height: "30px",
  width: "80%",
  borderRadius: "10px",
  border: "3px solid gray",
  textAlign: "center",
  marginRight: "5px",
};
const divBlockSearch = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};
function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth");
  };
  const handleNavigateAbout = () => {
    navigate("/about");
  };
  const user = { name: "dali" };
  const logIn = false
  return (
    <div className="nav-header">
      <Button variant="contained">
        <Link to="/" style={styleLink}>
          <GoLaw size="35px" />
        </Link>
      </Button>
      <Button variant="contained" onClick={handleNavigateAbout}>
        About Us
      </Button>
      <form style={divBlockSearch}>
        <input
          type="text"
          style={inputField}
          placeholder="Identity  number of case"
          required
        />
        <Button variant="contained" type="submit">Consult</Button>
      </form>
      {logIn ? (
        <Button variant="outlined" color="error">
          Sign out
        </Button>
      ) : (
        <Button variant="contained" onClick={handleClick}>
          Sign In
        </Button>
      )}
      {/* <Link to="/profile">
        <Avatar name={user.name} size="40" className="avatar" />
      </Link> */}
    </div>
  );
}

export default Navbar;
