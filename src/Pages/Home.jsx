import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Example from "../Component/Offcanvas";

const Home = () => {
  return (
    <div className="m-5">
      <Example />
      <Link to="/adduser">
        <Button variant="primary">Add User</Button>
      </Link>
    </div>
  );
};
export default Home;
