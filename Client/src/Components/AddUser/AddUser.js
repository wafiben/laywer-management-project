import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const styleListOfCases = {
  position: "absolute",
  left: "350px",
  top: "100px",
  width: "1300px",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
};
const inputProps = {
  step: 500,
};
function AddUser() {
  return (
    <div style={styleListOfCases}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "45ch" },
        }}
       
        autoComplete="off"
      >
        <div>
          <div>
            <TextField
              id="outlined-disabled"
              label="First -name"
              defaultValue="First Name"
              required
            />
          </div>
          <div>
            <TextField
              id="outlined-disabled"
              label="Last-name"
              defaultValue="First Name"
              required
            />
          </div>
          <div>
            <TextField
              id="outlined-disabled"
              label="Email"
              defaultValue="Email"
              required
            />
          </div>
          <div>
            <TextField
              id="outlined-disabled"
              label="Phone number"
              defaultValue="Phone number"
              required
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="password"
              required
            />
          </div>
          <div>
            <TextField id="outlined-password-input" type="file" />
          </div>
          <Button variant="contained" type="submit">Submit</Button>
        </div>
      </Box>
    </div>
  );
}

export default AddUser;
