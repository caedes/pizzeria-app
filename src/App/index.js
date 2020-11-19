import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { Provider } from "react-redux";

import { theme } from "./theme";
import routes from "./routes";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          {Object.values(routes).map((route) => (
            <Route key={route.path} exact {...route} />
          ))}
        </Router>
      </ThemeProvider>
    </Provider>
  );
}
