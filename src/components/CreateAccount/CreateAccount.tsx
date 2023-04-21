import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import styles from "./CreateAccount.module.css";

const CreateAccount = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    allowExtraEmails: false,
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(userInput);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        width={{ xs: "100%", md: "50%" }}
        padding={{ xs: "0 20px", md: "0 40px" }}
      >
        <div id="logo" className={styles.logo}>
          <Typography
            variant="h2"
            style={{
              fontSize: "400%",
              color: "DarkBlue",
              fontFamily: '"Segoe UI"',
              fontWeight: "400px",
            }}
          >
            OpenMarketHub
          </Typography>
        </div>
        <br />
        <div id="h5">
          <Typography variant="h5">
            Creating Entrepreneurs for the upcoming generation.
          </Typography>
        </div>
      </Box>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        width={{ xs: "100%", md: "45%" }}
        padding={{ xs: "0 20px", md: "0 40px" }}
        marginTop={{ xs: "40px", md: "0" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              value={userInput.firstName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              value={userInput.lastName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={userInput.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={userInput.password}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="allowExtraEmails"
                  value={userInput.allowExtraEmails}
                  color="primary"
                  onChange={handleInputChange}
                />
              }
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default CreateAccount;
