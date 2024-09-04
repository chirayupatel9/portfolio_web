import * as React from "react";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import HeaderFile from "./components/HeaderFile";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import Section2 from "./components/Section2";
import { Paper } from "@mui/material";
import Footer from "./components/Footer";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div>
    <Paper
      x={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <div className="App">
        <HeaderFile />
        <div className="right">
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? <BsSun /> : <BsMoonStars />}
          </IconButton>
        </div>
        <br />
        <Section1 />
        <Section3 />
        <Section2 />
        <Footer/>
      </div>
    </Paper>
    </div>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");

  // Memoize the color mode toggle function
  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => {
      setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
    },
  }), []);

  // Memoize the theme object
  const theme = React.useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

