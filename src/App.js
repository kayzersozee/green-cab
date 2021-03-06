import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main/Main.js";
import Navigation from "./pages/Navigation";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

const StyledApp = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 1024px;
  max-height: 1366px;
  margin: 0 auto;
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themetoggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <StyledApp>
          <Navigation themetoggler={themetoggler} theme={theme} />
          <Main />
        </StyledApp>
      </Router>
    </ThemeProvider>
  );
}

export default App;
