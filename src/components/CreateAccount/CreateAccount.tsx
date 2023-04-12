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
import React, { FormEvent } from "react";
import styles from "./CreateAccount.module.css";

const CreateAccount = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box alignContent="center" width="50%" marginLeft="0px" sx={{}}>
        <Typography
          variant="h2"
          style={{
            fontSize: "450%",
            color: "DarkBlue",
            fontFamily: '"Segoe UI"',
            fontWeight: "400px",
            paddingLeft: "19%",
            paddingTop: "35%",
          }}
        >
          OpenMarketHub
        </Typography>
        <br />
        <Typography variant="h5" style={{ paddingLeft: "19%" }}>
          Creating Entreprenuers for upcoming generation.
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          width: "45%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          mt: "19%",
          mr: "7.5%",
          mb: "10%",
        }}
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
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
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
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreateAccount;
