import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";
import Home from "./views/home";

const App = () => {
  const [currentPage] = React.useState("home");

  const renderPage = () => {
    switch (currentPage) {
      default:
      case "home":
        return <Home />;
    }
  };

  return renderPage();
};

ReactDOM.render(<App />, document.getElementById("react-page"));
