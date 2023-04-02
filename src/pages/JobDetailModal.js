import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar.js';
import { getJob } from '../data.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function JobDetailModal() {
  let params = useParams();
  let job = getJob(params.jobId);

  return (
    <div>
      <NavigationBar></NavigationBar>
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {job.title}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          {job.description}
          <br />
          Location: {job.city}
          <br />
          Experience: {job.yrsXPExpected}
          <br />
          Salary: {job.salaryLow} - {job.salaryHigh}
        </Typography>
      </Box>
    </div>
  );
}
