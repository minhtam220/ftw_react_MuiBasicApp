import "../App.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";
import JobCard from "../components/JobCard";
import { getJobs } from "../data.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";

export default function JobsPage() {
  const location = useLocation();
  //implement login
  const { isAuthenticated } = useContext(AuthContext);
  const { login } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  //implement search
  let jobs = getJobs();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <NavigationBar></NavigationBar>
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
  );
}
