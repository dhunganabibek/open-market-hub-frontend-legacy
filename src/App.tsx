import { Box } from "@mui/material";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace/Marketplace";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Box
      sx={{
        background: "white",
        // "linear-gradient(rgba(45, 55, 72, 0) 0%, rgb(45, 55, 72) 100%), rgb(26, 32, 44)",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/home" element={<Body />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
