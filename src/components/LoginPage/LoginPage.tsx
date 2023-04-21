import React, { useState } from "react";
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

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginPage: React.FC = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setLoginForm((prevLoginForm) => ({
      ...prevLoginForm,
      [name]: name === "rememberMe" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(loginForm);
    // TODO: handle login logic
  };

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
        <div id="logo">
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
        onSubmit={handleSubmit}
        width={{ xs: "100%", md: "45%" }}
        padding={{ xs: "0 20px", md: "0 40px" }}
        marginTop={{ xs: "40px", md: "0" }}
      >
        <Typography variant="h5" mb={2}>
          Returning User
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={loginForm.email}
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
              value={loginForm.password}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  checked={loginForm.rememberMe}
                  color="primary"
                  onChange={handleInputChange}
                />
              }
              label="Remember me"
            />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
          Login
        </Button>
        <Grid container justifyContent="flex-end" mt={2}>
          <Grid item>
            <Link href="/forgotPassword/" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginPage;
