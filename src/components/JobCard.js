import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Box, Divider } from "@mui/material";
import SkillsList from "./SkillsList";
import Modal from "@mui/material/Modal";
import { styled, alpha } from "@mui/material/styles";

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

export default function JobCard({ loggedIn, handleLogin, handleLogout, job }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
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
              onClick={handleOpen}
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
            >
              Learn more
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {loggedIn ? (
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {job.title}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {job.description}
                    <br />
                    Location: {job.city}
                    <br />
                    Experience: {job.yearsXPExpected}
                    <br />
                    Salary: {job.salaryLow} - {job.salaryHigh}
                  </Typography>
                </Box>
              ) : (
                <Box sx={style}>
                  <Button onClick={handleLogin} sx={{ color: "#fff" }}>
                    Log In
                  </Button>
                </Box>
              )}
            </Modal>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
