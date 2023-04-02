import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function LoginPage() {
  const { isAuthenticated } = useContext(AuthContext);
  const { login } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    /*
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    */
    if (isAuthenticated) {
      navigate("/jobs");
    } else {
      login();
      navigate("/jobs");
    }
  };

  const handleLogin = () => {
    //event.preventDefault();

    login();
    navigate("/jobs");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          //marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            noRequired
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{
              color: "white",
            }}
          />
          <TextField
            margin="normal"
            noRequired
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{
              color: "white",
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
