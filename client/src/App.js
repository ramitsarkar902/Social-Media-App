import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
