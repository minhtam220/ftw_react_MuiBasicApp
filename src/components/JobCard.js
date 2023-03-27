import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Box, Divider } from "@mui/material";
import SkillsList from "./SkillsList";

export default function JobCard({ job }) {
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
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
