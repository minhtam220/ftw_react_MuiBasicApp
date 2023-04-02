import "./App.css";
import { Grid, Box } from "@mui/material";
import { getJobs } from "./data.js";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavigationBar from "./components/NavigationBar";
import JobCard from "./components/JobCard";
import BasicPagination from "./components/BasicPagination";
import { useState } from "react";

//new codes
import { Route, Routes, useLocation } from "react-router-dom";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
      light: "#e3f2fd",
      dark: "#42a5f5",
      contrastText: "rgba(0,0,0,0.87)",
    },
  },
});

export default function App() {
  //implement login
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  //implement search
  let jobs = getJobs();
  let [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
      </div>
    </ThemeProvider>
  );
}
