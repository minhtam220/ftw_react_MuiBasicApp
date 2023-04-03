import {
  Box,
  Button,
  CardActionArea,
  Divider,
  Modal,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import SkillsList from "./SkillsList";

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
  //const handleOpenJobModal = () => setOpenJobModal(true);
  const handleCloseJobModal = () => setOpenJobModal(false);

  const [jobModalOpen, setOpenJobModal] = useState(false);

  const navigate = useNavigate();
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
                  isAuthenticated
                    ? () => {
                        navigate("/jobs/" + job.id);
                      }
                    : () => {
                        navigate("/login");
                      }
                }
              >
                Learn more
              </Button>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal
        open={jobModalOpen}
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
