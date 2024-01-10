import React from "react";
import Hero from "../Hero/Hero";
import { Box, Button, Typography } from "@mui/material";
import FeatureCard from "../FeatureCard/FeatureCard";
import Testimonial from "../Testimonial/Testimonial";
import Feedback from "../Feedback/Feedback";
import ValueSection from "../ValueSection/ValueSection";
import {
  faLock,
  faMicrochip,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import CustomGradientCard from "../GradientCard/GradientCard";

const Body = () => {
  return (
    <Box sx={{ background: "#FFF" }}>
      <Hero />
      <Box
        sx={{
          py: 3,
          display: "flex",
          justifyContent: "center",
          background: "#FFF",
        }}
      >
        <Typography variant="h3" color="secondary">
          Our features
        </Typography>
      </Box>

      <Box
        sx={{
          py: 3,
          margin: { xs: 2, sm: "auto" },
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
          background: "#FFF",
        }}
      >
        <CustomGradientCard
          color="#ebe8e8"
          feature="Higher Security!"
          icon={faLock}
          description="Implementation of measures and protocols to reduce the risk of unauthorized access, data breaches, and other security threats."
        />
        <CustomGradientCard
          color="#ebe8e8"
          feature="Responsive Design"
          icon={faUsers}
          description="Designing digital products and services that are intuitive, easy-to-use, and engaging, providing users with a seamless and enjoyable experience."
        />
        <CustomGradientCard
          color="#ebe8e8"
          feature="Scalability"
          icon={faMicrochip}
          description="Handle increased workloads, traffic, and growth while maintaining performance and availability without needing major architectural changes."
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
        <Button
          variant="contained"
          sx={{
            height: "70px",
            background: "linear-gradient(270deg, #13adc7 0%, #945dd6 100%)",
            borderRadius: "15px",

            fontSize: "25px",
            padding: 4,
            textTransform: "capitalize",
            mt: 2.5,
          }}
        >
          Explore all features
        </Button>
      </Box>

      <Testimonial />
      <ValueSection />
      <Feedback />
    </Box>
  );
};

export default Body;
