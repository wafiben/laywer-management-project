import React from "react";
import CardUser from "../CardUser/CardUser";
const styleListOfUsers = {
  position: "absolute",
  left: "350px",
  top: "100px",
 width: "1300px", 
  display: "flex",
  justifyContent: "space-around",
  flexWrap:'wrap',
};
function ListOfUsers() {
  return (
    <div style={styleListOfUsers}>
      <CardUser />
      <CardUser />
      <CardUser /> 
    </div>
  );
}

export default ListOfUsers;
