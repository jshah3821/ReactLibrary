import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./Component/Menubar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Popup from "./Component/Popup";

export default function App() {
  return (
    <Router>
      <div>
        <Menubar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/adduser" element={<Popup />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
