import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmptyState from "./views/emptyState";
import Layout from "./components/layout";
import { primary } from "./assets/styles/ui-kit/_variables.module.scss";

import Home from "./views/home";

const materialTheme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
  },
  typography: {
    fontFamily: ["PlusJakartaSans-Regular", '"Open Sans"', "sans-serif"].join(
      ","
    ),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={materialTheme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<EmptyState />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
