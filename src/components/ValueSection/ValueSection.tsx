import {
  faFaceSmile,
  faShieldHalved,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import React from "react";

const ValueSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        alignItems: "center",
        m: 5,
        py: 3,
        minHeight: "30vh",
      }}
    >
      <Box sx={{}}>
        <Typography variant="h3" mb={3}>
          Our Values
        </Typography>
        <Typography variant="h5">
          We Celebrate All The Students <br /> And Their Journey.
        </Typography>
        <br />
        <Typography variant="h5">
          We Are Proud To Make <br /> Student's Life Easier
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          py: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 3,
            backgroundColor: " #9921e8",
            background: "linear-gradient(315deg, #9921e8 0%, #5f72be 74%)",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <FontAwesomeIcon icon={faUsers} size="5x" />
          <Typography variant="h5" mt={3}>
            Bringing Community Closer
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: " #9921e8",
            background: "linear-gradient(315deg, #9921e8 0%, #5f72be 74%)",
            borderRadius: "20px",
            color: "white",
            p: 3,
          }}
        >
          <FontAwesomeIcon icon={faFaceSmile} size="5x" />
          <Typography variant="h5" mt={3}>
            Guaranteed top notch User{" "}
          </Typography>
          <Typography variant="h5">Experience</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px solid green",
            p: 3,
            backgroundColor: " #9921e8",
            background: "linear-gradient(315deg, #9921e8 0%, #5f72be 74%)",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <FontAwesomeIcon icon={faShieldHalved} size="5x" />
          <Typography variant="h5" mt={3}>
            Ensuring topmost security
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ValueSection;
