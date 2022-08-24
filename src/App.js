import React from "react";
import Router from "./routes/Router";
import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";
import GlobalProvider from "./providers/GlobalProvider";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Router/>      
      </GlobalProvider>  
    </ThemeProvider> 
  );
}

export default App;
