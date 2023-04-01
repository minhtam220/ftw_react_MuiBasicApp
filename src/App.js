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
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";

import { Route, Routes, useLocation } from "react-router-dom";
import { Main } from "./pages/Main";
import { Modal } from "./pages/Modal";

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
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setLoggedIn(status);
  };

  const handleLogout = (status) => {
    setLoggedIn(status);
  };

  //implement search
  let jobs = getJobs();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <ThemeProvider theme={theme}>
      <NavigationBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      {loggedIn ? (
        <Logout onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      <Grid container spacing={2}>
        {jobs

          .filter((job) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let title = job.title.toLowerCase();
            return title.startsWith(filter.toLowerCase());
          })

          .slice(0, 20)

          .map((job) => (
            <Grid item xs={12} md={4} lg={3}>
              <JobCard
                loggedIn={loggedIn}
                handleLogin={handleLogin}
                job={job}
              />
            </Grid>
          ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <BasicPagination />
      </Box>
    </ThemeProvider>
  );
}
