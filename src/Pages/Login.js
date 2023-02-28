import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup } from "reactstrap";
import CustomInput from "../components/common/CustomInput";
import {
  checkLogin,
  checkLoginValidation,
} from "../components/Helpers/helpers";

export default function Login() {
  const [users, setUsers] = useState([]);
  const [authError, setAuthError] = useState(undefined);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      const data = await localStorage.getItem("Users");
      setUsers(data);
    };

    getUsers(); // run it, run it

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  const validationHandler = (name, errorMessage) => {
    setErrors({ ...errors, [name]: errorMessage });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const validationProfileError = checkLoginValidation(errors, {
      email,
      password,
    });
    if (Object.keys(validationProfileError).length !== 0) {
      setErrors(validationProfileError);
      return;
    } else {
      setErrors({});
      const loginError = checkLogin(users, email, password);
      if (Object.keys(loginError).length !== 0) {
        setAuthError(loginError);
        return;
      } else {
        console.log("success");
      }
    }
  };

  console.log(users);
  return (
    <div className="container box">
      <div className="form-container">
        <h1 className="header">Log in</h1>
        {authError && <span style={{ color: "red" }}>{authError}</span>}
        <Form
          className="form"
          onSubmit={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormGroup floating>
            <CustomInput
              name="email"
              placeholder="Email"
              label="Email"
              type="email"
              id="exampleEmail"
              validationHandler={validationHandler}
              error={errors.email}
            />
          </FormGroup>

          <FormGroup floating>
            <CustomInput
              name="password"
              placeholder="********"
              label="Password"
              type="password"
              id="examplePassword"
              validationHandler={validationHandler}
              error={errors.password}
            />
          </FormGroup>
          <Button
            to="/"
            className="primary button"
            style={{
              marginTop: "5%",
              alignSelf: "center",
            }}
          >
            Login
          </Button>
        </Form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h6>New to Bazaar ?</h6>
          <Link
            to="/register"
            className="secondary button"
            style={{ marginTop: "2%" }}
          >
            Create a new Account
          </Link>
        </div>
      </div>
    </div>
  );
}
