import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Box, Divider } from "@mui/material";
import SkillsList from "./SkillsList";

import { Modal } from "@mui/material";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";

import { getJob } from "../data.js";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

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

export default function JobCard({ job }) {
  const { isAuthenticated } = useContext(AuthContext);
  const { login } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  //show or not show Login Modal
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => setOpenLoginModal(false);
  //show or not show Job Modal
  const [openJobModal, setOpenJobModal] = useState(false);
  const handleOpenJobModal = () => setOpenJobModal(true);
  const handleCloseJobModal = () => setOpenJobModal(false);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    login();
    handleCloseLoginModal();
  };

  return (
    <div>
      <Card>
        <CardActionArea
          sx={{
            height: "300px",
            minWidth: "350px",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              {job.title}
            </Typography>
            <Divider />
            <SkillsList skills={job.skills}></SkillsList>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
            >
              {job.description}
            </Typography>
            <Box
              sx={{
                mt: 3,
                ml: 1,
                mb: 1,
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                borderRadius: 1,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  alignContent: "center",
                  backgroundColor: "#c49f49",
                  fontSize: "12px",
                  marginBottom: "10px",
                  "&:hover": {
                    bgcolor: "#c4ad49",
                  },
                }}
                onClick={
                  isAuthenticated ? handleOpenJobModal : handleOpenLoginModal
                }
              >
                Learn more
              </Button>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={openLoginModal}
        onClose={handleCloseLoginModal}
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
      <Modal
        open={openJobModal}
        onClose={handleCloseJobModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {job.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {job.description}
            <br />
            Location: {job.city}
            <br />
            Experience: {job.yrsXPExpected}
            <br />
            Salary: {job.salaryLow} - {job.salaryHigh}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
