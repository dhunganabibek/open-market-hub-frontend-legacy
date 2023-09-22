import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import heroImage from "../../assets/hero.jpg";
import AnimatedText from "../AnimatedText/AnimatedText";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        background: `linear-gradient(rgba(160, 32, 240, 0.2),rgba(160, 32, 240, 0.2)), url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: { md: "right", lg: "cover" },
        backgroundPosition: "right",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2em",
          alignItems: { md: "center", lg: "flex-end" },
          height: "100%",
          mr: { lg: 10 },
        }}
      >
        <Box
          sx={{
            margin: "2%",
            px: 2,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AnimatedText color="white" text="Open Market Hub" variant="h3" />
          <Typography
            variant="h6"
            color="#d7d2d2"
            sx={{ maxWidth: "450px", marginY: 4, pl: { lg: 2 } }}
            textAlign="center"
          >
            Hello Everyone!! Welcome to the Smart, Safe and Responsive Way to
            Buy and Sell Products Locally!
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
            gap={2}
          >
            <Button
              href="/marketplace"
              variant="contained"
              color="warning"
              sx={{
                borderRadius: "20px",
                fontSize: "1.2em",
                px: 2,
                py: 1,
              }}
            >
              MarketPlace
            </Button>
            <Button
              href="/create-new-account"
              variant="contained"
              color="inherit"
              sx={{
                borderRadius: "20px",
                fontSize: "1.2em",
                px: 2,
                py: 1,
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
