import { Grid } from "@mui/material";
import { Outlet, useSearchParams } from "react-router-dom";
import "../App.css";
import JobCard from "../components/JobCard";
import { getJobs } from "../data.js";

import NavigationBar from "../components/NavigationBar";

export default function JobsPage() {
  //implement search
  let jobs = getJobs();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <NavigationBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      ></NavigationBar>
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
      <Outlet />
    </div>
  );
}
