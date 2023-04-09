import { Box, Button, Stack, Typography } from "@mui/material";
import heroImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        background: `linear-gradient(rgba(160, 32, 240, 0.2),rgba(160, 32, 240, 0.2)), url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      style={{
        clipPath: "polygon(0 0, 100% 0%, 100% 90%, 0% 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2em",
          alignItems: "flex-end",
          height: "100%",
        }}
      >
        <Box
          sx={{
            margin: "10%",
          }}
        >
          <Typography variant="h2" component="h2" color="#FFF">
            Open Market Hub
          </Typography>
          <Typography
            variant="h5"
            color="#00ffea"
            sx={{ maxWidth: "550px", marginY: 4 }}
          >
            Welcome to the Smart, Safe and Best Responsive Way to Buy and Sell
            Products Locally!
          </Typography>

          <Stack direction="row" gap={2}>
            <Button
              variant="contained"
              color="warning"
              sx={{
                height: "3em",
                borderRadius: "20px",
                fontSize: "1em",
                padding: 2,
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="info"
              sx={{
                height: "3em",
                borderRadius: "20px",
                fontSize: "1em",
                padding: 2,
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
