import "./App.css";
import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import { Container, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import NavItem from "./components/NavItem.js";
import LostCities from "./pages/LostCities";
import Home from "./pages/Home";
import Dogs from "./pages/Dogs";

function App() {
  const navItems = [
    {
      id: 0,
      label: "Home",
      href: "/home",
      selected: true,
    },
    {
      id: 1,
      label: "Lost Cities",
      href: "/lost-cities",
      selected: false,
    },
    {
      id: 2,
      label: "Dogs",
      href: "/dogs",
      selected: false,
    },
  ];

  const [navItemsState, setNavItemsState] = useState(navItems);
  const handleNavItemClick = (e) => {
    e.preventDefault();
    console.log(e);
    const newNavItems = navItems.map((item) => {
      if (item.id === e.target.id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      return item;
    });
    setNavItemsState(newNavItems);
  };
  return (
    <>
      <Router>
        <Box sx={{ bgcolor: blueGrey[50], color: blueGrey[700] }}>
          <Typography variant="h6" sx={{ p: 2 }}>
            Pixton Project
          </Typography>
        </Box>{" "}
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
              zIndex: 1,
              justifyContent: "space-between",
            }}
          >
            {navItems.map((item) => (
              <Link to={item.href} style={{ textDecoration: "none" }}>
                <NavItem
                  key={item.id}
                  item={item}
                  selected={navItemsState.selected}
                  onClick={handleNavItemClick}
                />
              </Link>
            ))}
          </Box>
        </Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "85vh",
          }}
        >
          <Routes>
            <Route path="/lost-cities" element={<LostCities />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Box>
      </Router>
    </>
  );
}

export default App;
