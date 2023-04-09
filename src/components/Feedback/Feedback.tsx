import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Feedback = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        p: 2,
        background: "#A020F0",
        height: "40vh",
        clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
      }}
    >
      <Typography variant="h4" color="#FFF">
        We would love to hear back from you!
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(270deg, #13adc7 0%, #945dd6 100%)",
          borderRadius: "15px",
          height: "50px",
          fontSize: "25px",
          padding: 4,
          textTransform: "capitalize",
          mt: 2.5,
        }}
      >
        Give Feedback!
      </Button>
    </Box>
  );
};

export default Feedback;
