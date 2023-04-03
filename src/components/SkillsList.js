import * as React from "react";
import { Box, Chip, Stack } from "@mui/material";

export default function SkillsList({ skills }) {
  return (
    <Box sx={{ m: 2 }}>
      <Stack direction="row" spacing={1}>
        {skills.slice(0, 4).map((skill) => (
          <Chip
            label={skill}
            sx={{
              color: "white",
              backgroundColor: "red",
              fontSize: "8px",
              borderRadius: "25px",
              height: "18px",
              overflowWrap: "break-word",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
