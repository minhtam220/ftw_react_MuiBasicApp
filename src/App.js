import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { RequireAuth } from "./components/RequireAuth";
import LoginModal from "./components/LoginModal";
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
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<JobsPage />}>
              <Route path="login" element={<LoginModal />}></Route>
            </Route>
            <Route path="jobs" element={<JobsPage />}>
              <Route
                path=":jobId"
                element={
                  <RequireAuth>
                    <JobModal />
                  </RequireAuth>
                }
              />
            </Route>

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <h2>There's nothing here!</h2>
                </main>
              }
            />
          </Routes>
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}
