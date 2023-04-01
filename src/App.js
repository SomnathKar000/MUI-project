import { ThemeProvider, createTheme, CssBaseline, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </ThemeProvider>
    </div>
  );
}

export default App;
