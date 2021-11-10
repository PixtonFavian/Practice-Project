import "./App.css";
import Box, { BoxProps } from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import { Container, Typography } from "@mui/material";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavItem from "./components/NavItem.js";
import LostCities from "./pages/LostCities";
import Home from "./pages/Home";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        bgcolor: blueGrey[700],
        color: "white",
      }}
    >
      <Typography variant="h4" sx={{ p: 2 }}>
        Contact
      </Typography>
    </Box>
  );
};

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState(0);
  const navItems = [
    {
      id: 0,
      label: "Home",
      href: "/home",
    },
    {
      id: 1,
      label: "Lost Cities",
      href: "/lost-cities",
    },
    {
      id: 2,
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      <Router>
        <Box sx={{ bgcolor: blueGrey[50], color: blueGrey[700] }}>
          <Typography variant="h6" sx={{ p: 2 }}>
            Pixton Project
          </Typography>
        </Box>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: 600,
              m: 1,
              bgcolor: "white",
              overflow: "hidden",
              borderRadius: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {navItems.map((item) => (
              <Link to={item.href} style={{ textDecoration: "none" }}>
                <NavItem
                  key={item.id}
                  item={item}
                  selected={selectedNavItem === item.id}
                  onClick={() => setSelectedNavItem(item.id)}
                />
              </Link>
            ))}
          </Box>
        </Container>
        <Routes>
          <Route path="/lost-cities" element={<LostCities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
