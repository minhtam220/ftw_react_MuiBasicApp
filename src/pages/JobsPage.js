import "../App.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";
import JobCard from "../components/JobCard";
import { getJobs } from "../data.js";
import { Login } from "../components/Login";
import { Logout } from "../components/Logout";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useContext } from "react";
import { AuthContext } from "../AuthContext";

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

export default function JobsPage() {
  const location = useLocation();

  const { isAuthenticated } = useContext(AuthContext);
  const { login } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  //implement search
  let jobs = getJobs();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Grid container spacing={2}>
          {jobs
            .filter((job) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let title = job.title.toLowerCase();
              return title.startsWith(filter.toLowerCase());
            })

            .slice(0, 20)

            .map((job) => (
              <Grid item xs={12} md={4} lg={3}>
                <JobCard key={job.id} job={job} />
              </Grid>
            ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
}
