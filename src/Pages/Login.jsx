import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credential, SetCredential] = useState({
    email: "",
    password: ""
  });
  const [checked, setChecked] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // let Navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetCredential((prevState) => ({
      ...prevState,
      [name]: value
    }));
    setChecked(!checked);
  };
  const ValidateForm = () => {
    setEmailError(false);
    setPasswordError(false);

    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(credential.email) ==
      false
    ) {
      setEmailError(true);
    }
    if (credential.password.trim().length < 8) {
      setPasswordError(true);
    }
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ValidateForm();
    console.log(credential, checked);
    // console.log(emailError, passwordError);
    // Navigate("/");
    SetCredential({ email: "", password: "" });
  };
  return (
    <div className="loginForm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={credential.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {emailError && <Alert variant="danger">Invalid email entered</Alert>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={credential.password}
            onChange={handleChange}
          />
        </Form.Group>
        {passwordError && (
          <Alert variant="danger">password must contain 8 characters</Alert>
        )}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            name="checked"
            onClick={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Login;
