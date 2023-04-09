import { Box, Typography } from "@mui/material";
import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import { faBeer } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <Box
      sx={{
        py: 5,
        my: 5,
        backgroundColor: " #A020F0",
        color: "#FFF",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box>
        <Typography variant="h4">Here’s what people</Typography>
        <Typography variant="h4">have to say about us</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        <FeatureCard
          feature="Better user experience"
          icon={faBeer}
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctic"
        />
        <FeatureCard
          feature="Scalability"
          icon={faBeer}
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctic"
        />
      </Box>
    </Box>
  );
};

export default Testimonial;
