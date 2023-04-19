import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faLock,
  faPhone,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { FormLabel, Stack } from "react-bootstrap";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,

          minWidth: "400px",
          width: "50%",
        }}
      >
        <Typography variant="h4" align="center">
          Contact us
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            id="firstName"
            label="First Name"
            variant="outlined"
            InputLabelProps={{
              style: {
                color: "#FFF",
              },
            }}
            InputProps={{
              style: {
                color: "#FFF",
                border: "2px solid #FFF",
                borderRadius: "20px",
                fontSize: "1.3em",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faUserAlt} color="#FFF" size="2x" />
                </InputAdornment>
              ),
            }}
          ></TextField>

          <TextField
            fullWidth
            id="lastName"
            placeholder="Last Name"
            variant="outlined"
            InputLabelProps={{
              style: {
                color: "#FFF",
              },
            }}
            InputProps={{
              style: {
                color: "#FFF",
                border: "2px solid #FFF",
                borderRadius: "20px",
                fontSize: "1.3em",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faUserAlt} color="#FFF" size="2x" />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Box>

        <TextField
          id="email"
          placeholder="Email"
          variant="outlined"
          InputLabelProps={{
            style: {
              color: "#FFF",
            },
          }}
          InputProps={{
            style: {
              color: "#FFF",
              border: "2px solid #FFF",
              borderRadius: "20px",
              fontSize: "1.3em",
            },
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faEnvelope} color="#FFF" size="2x" />
              </InputAdornment>
            ),
          }}
        ></TextField>

        <TextField
          id="phoneNumber"
          placeholder="Phone Number"
          variant="outlined"
          InputLabelProps={{
            style: {
              color: "#FFF",
            },
          }}
          InputProps={{
            style: {
              color: "#FFF",
              border: "2px solid #FFF",
              borderRadius: "20px",
              fontSize: "1.3em",
            },
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faPhone} color="#FFF" size="2x" />
              </InputAdornment>
            ),
          }}
        ></TextField>

        <TextField
          id="message"
          placeholder="Enter your message here."
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          InputLabelProps={{
            style: {
              color: "#FFF",
            },
          }}
          InputProps={{
            style: {
              color: "#FFF",
              border: "2px solid #FFF",
              borderRadius: "20px",
              fontSize: "1.3em",
            },
          }}
        ></TextField>

        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            fontSize: "1.5em",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
