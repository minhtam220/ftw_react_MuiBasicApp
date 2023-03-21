import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Box } from "@mui/material";
import SkillsList from "./SkillsList";

export default function JobCard({ job }) {
  return (
    <Card sx={""}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {job.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {job.description}
          </Typography>
          <SkillsList skills={job.skills}></SkillsList>
          <Box
            sx={{
              mt: 3,
              ml: 1,
              mb: 1,
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            <Button variant="contained" sx={{ alignContent: "center" }}>
              Learn more
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
