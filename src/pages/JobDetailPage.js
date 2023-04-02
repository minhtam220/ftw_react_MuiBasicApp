import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Box, Divider } from "@mui/material";
import { Modal } from "@mui/material";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getJob } from "../data.js";

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

export default function JobDetailPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let job = getJob(params.jobId);

  return (
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
  );
}
