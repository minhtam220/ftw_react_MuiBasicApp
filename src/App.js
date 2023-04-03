import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";
import "./App.css";
import { getJobs } from "./data.js";
//implement login
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
//children pages
import LoginModal from "./components/LoginModal";
import { RequireAuth } from "./components/RequireAuth";
import JobModal from "./pages/JobModal";
import JobsPage from "./pages/JobsPage";

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
  //implement search
  let jobs = getJobs();
  let [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<JobsPage />} />
            <Route path="jobs" element={<JobsPage />}></Route>
            <Route
              path="jobs/:jobId"
              element={
                <RequireAuth>
                  <JobModal />
                </RequireAuth>
              }
            />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <h2>There's nothing here!</h2>
                </main>
              }
            />
          </Routes>
          <LoginModal />
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}
