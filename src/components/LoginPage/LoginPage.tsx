import { Box, Button, Input, TextField } from "@mui/material";
import React from "react";

const LoginPage = () => {
  function loginButton() {
    console.log("Login sucessful");
  }
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box>
        <h1> Login Page</h1>
        <TextField
          id="filled-basic"
          label="Enter your email"
          variant="filled"
        />{" "}
        <br />
        <TextField id="filled-basic" label="Password" variant="filled" /> <br />
        <Button variant="contained" onClick={loginButton}>
          Login
        </Button>
        <br />
      </Box>
    </Box>
  );
};

export default LoginPage;
