import { Box, Modal, Typography } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar.js";
import { getJob } from "../data.js";
import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
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

export default function JobModal() {
  let params = useParams();
  let job = getJob(params.jobId);

  const [modalOpen, setModalopen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (job) {
      setModalopen(true);
    } else {
      setModalopen(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Modal
        open={modalOpen}
        onClose={() => {
          navigate(-1);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Job Modal: {job.title}
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
    </>
  );
}
