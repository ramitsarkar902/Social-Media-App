import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <Test />
    </>
  );
}

export default App;
