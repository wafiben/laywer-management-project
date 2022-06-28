import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Button from "@mui/material/Button";
const contentCartStyle = {
  backgroundColor: "white",
  borderRadius: "20px",
  marginBottom: "20px",
  fontFamily: "cursive",
  color: "black",
  boxShadow: "10px 10px 10px 10px gray",
  paddingTop: "10px",
  paddingLeft: "10px",
  paddingRight: "10px",
};
const styleButton = { marginBottom: "20px" };

function CardUser() {
  return (
    <div style={contentCartStyle}>
      <FaUserAlt size="30px" />
      <h1>mohamed ali</h1>
      <div>
        <h1>
          <AiFillPhone />
        </h1>
        <h1>54900777</h1>
      </div>
      <div>
        <h1>
          <MdEmail />
        </h1>
        <h1>mohammedali@gmail.com</h1>
      </div>
      <Button variant="contained" style={styleButton}>
        See details
      </Button>
    </div>
  );
}

export default CardUser;
