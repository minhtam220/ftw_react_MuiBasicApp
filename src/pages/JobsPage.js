import "../App.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Outlet, useSearchParams } from "react-router-dom";
import { getJobs } from "../data.js";
import JobCard from "../components/JobCard";
import NavigationBar from "../components/NavigationBar";
import JobPagination from "../components/JobPagination";

export default function JobsPage() {
  //implement search
  let jobs = getJobs();

  var length = 0;
  for (var key in jobs) {
    if (jobs.hasOwnProperty(key)) {
      ++length;
    }
  }

  let pageCount = (length % 5) - 1;

  let [searchParams, setSearchParams] = useSearchParams();
  let [currentPage, setCurrentPage] = useState(1);

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

          //.slice(0, 5)

          //.slice(5, 10)

          .slice((currentPage - 1) * 5, currentPage * 5)
          .map((job) => (
            <Grid item xs={12} md={4} lg={4}>
              <JobCard key={job.id} job={job} />
            </Grid>
          ))}
      </Grid>
      <JobPagination
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Outlet />
    </div>
  );
}
