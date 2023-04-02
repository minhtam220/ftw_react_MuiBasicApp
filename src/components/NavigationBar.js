import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NavigationBar({}) {
  //show or not show Login Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //handle login
  const { login } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/jobs");
  };

  const handleLogout = () => {
    //event.preventDefault();
    logout();
    //navigate("/jobs");
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link
                to="/jobs"
                style={{ textDecoration: "none", color: "white" }}
              >
                Job Routing
              </Link>
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={""}
              />
            </Search>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {isAuthenticated ? <>Hello Tam</> : <></>}
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {isAuthenticated ? (
                <>
                  <Link>
                    <Button sx={{ color: "#fff" }} onClick={handleLogout}>
                      Logout
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link>
                    <Button sx={{ color: "#fff" }} onClick={handleOpen}>
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography>
            Pick one job and you won't have to eat noodles again!
          </Typography>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            <Box component="form" validate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value="tam@coderschool.com"
                autoFocus
                sx={{
                  color: "white",
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value="tam@coderschool.com"
                sx={{
                  color: "white",
                }}
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
        </Box>
      </Modal>
    </div>
  );
}
