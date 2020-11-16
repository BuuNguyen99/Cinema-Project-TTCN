import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import routes from "./routes/routes";
import { Switch, Route, Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./constants/themes";
import history from "./commons/history";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch> {result} </Switch>;
  };

  return (
    <Router history={history}>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <Header />
        {showContentMenus(routes)}
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
