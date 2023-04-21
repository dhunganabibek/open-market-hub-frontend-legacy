import React from "react";
import Hero from "../Hero/Hero";
import { Box, Button } from "@mui/material";
import FeatureCard from "../FeatureCard/FeatureCard";
import Testimonial from "../Testimonial/Testimonial";
import Feedback from "../Feedback/Feedback";
import ValueSection from "../ValueSection/ValueSection";
import LoginPage from "../LoginPage/LoginPage";
import CreateAccount from "../CreateAccount/CreateAccount";
import ForgetPassword from "../ForgetPassword/ForgetPassword";

const Body = () => {
  return (
    <Box>
      {/*<CreateAccount />*/}
      <CreateAccount />
      {/*<ForgetPassword />*/}
      {/* <LoginPage /> */}
      {/* <Hero />
      <Box
        sx={{
          py: 3,
          maxWidth: "1300px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <FeatureCard
          feature="Higher Security"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctic"
        />
        <FeatureCard
          feature="Better user experience"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctic"
        />
        <FeatureCard
          feature="Scalability"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctic"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Button size="large" variant="contained">
          Explore all features
        </Button>
      </Box>
      <Testimonial />
      <ValueSection />
      <Feedback /> */}
    </Box>
  );
};

export default Body;
