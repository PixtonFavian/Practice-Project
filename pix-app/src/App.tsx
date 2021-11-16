import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavItem from "./components/NavItem";
import Tenzies from "./pages/Tenzies";
import User from "./pages/User";
import Dogs from "./pages/Dogs";

import { useState } from "react";

import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "./reduxStore/hooks";

interface NavTypes {
  id: string;
  label: string;
  href: string;
  selected: boolean;
}

function App() {
  const navItems: NavTypes[] = [
    {
      id: nanoid(),
      label: "User",
      href: "/",
      selected: false,
    },
    {
      id: nanoid(),
      label: "Tenzies",
      href: "/tenzies",
      selected: false,
    },
    {
      id: nanoid(),
      label: "Dogs",
      href: "/dogs",
      selected: false,
    },
  ];

  const [nav, setNav] = useState<NavTypes[]>(navItems);
  const user = useAppSelector((state) => state.user);
  const handleNavClick = (id: string) => {
    setNav(
      nav.map((item) => {
        return { ...item, selected: item.id === id ? true : false };
      })
    );
  };

  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          bgcolor: blueGrey[200],
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: blueGrey[800], p: 2, mr: "auto" }}
        >
          Pixton Project
        </Typography>
        <Box
          sx={{
            maxWidth: 600,
            m: 1,
            bgcolor: blueGrey[50],
            overflow: "hidden",
            borderRadius: 1,
            display: "flex",
            zIndex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {user.user.created
            ? nav.map((item) => (
                <Link to={item.href} style={{ textDecoration: "none" }}>
                  <NavItem
                    key={item.id}
                    label={item.label}
                    selected={item.selected}
                    onClick={() => handleNavClick(item.id)}
                  />
                </Link>
              ))
            : null}
        </Box>
      </Box>{" "}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "85vh",
        }}
      >
        <Routes>
          <Route path="/tenzies" element={<Tenzies />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/" element={<User />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
