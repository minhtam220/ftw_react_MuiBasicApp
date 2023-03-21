import "./App.css";
import { Grid, Box } from "@mui/material";
import NavigationBar from "./components/NavigationBar";
import JobCard from "./components/JobCard";
import jobs from "./jobs.json";
import BasicPagination from "./components/BasicPagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
      light: "#e3f2fd",
      dark: "#42a5f5",
      contrastText: "rgba(0,0,0,0.87)",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <Grid container spacing={2}>
        {jobs.slice(0, 5).map((job) => (
          <Grid item xs={12} md={4} lg={3}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <BasicPagination />
      </Box>
    </ThemeProvider>
  );
}
