import { Pagination, Stack, Box } from "@mui/material";

import * as React from "react";

export default function JobPagination({
  pageCount,
  currentPage,
  setCurrentPage,
}) {
  //const [currentPage, setCurrentPage] = useContext(AuthContext);
  //console.log(currentPage);

  return (
    <div>
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
        <Stack spacing={2}>
          <Pagination
            count={pageCount}
            color="primary"
            value={currentPage}
            onChange={(e, value) => {
              setCurrentPage(value);
            }}
          />
        </Stack>
      </Box>
    </div>
  );
}
