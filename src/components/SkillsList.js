import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function SkillsList({ skills }) {
  return (
    <Box sx={{ m: 2 }}>
      <Stack direction="row" spacing={1}>
        {skills.slice(0, 4).map((skill) => (
          <Chip label={skill} />
        ))}
      </Stack>
    </Box>
  );
}
