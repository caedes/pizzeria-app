import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";

import { theme } from "./theme";
import routes from "./routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {Object.values(routes).map((route) => (
          <Route key={route.path} exact {...route} />
        ))}
      </Router>
    </ThemeProvider>
  );
}
