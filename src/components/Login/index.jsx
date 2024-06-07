import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import GoogleAuth from "../GoogleAuth";
import GoogleLogin from "../GoogleLogin";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    /* login action (fetch api) */
    dispatch(login(navigate, email, password, setIsLoading));
  };

  return (
    <>
      <h1 className="fw-semibold mb-5">Login</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-secondary">Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-secondary">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={isLoading}
          className="w-100 mt-3"
        >
          {isLoading ? "Processing..." : "Login"}
        </Button>
        <span className="my-3 d-block text-center text-secondary">OR</span>
        <GoogleLogin text="Login with Google" />
      </Form>
      <p className="mt-3 text-secondary">
        Don't have an account?{" "}
        <a
          className="link-underline link-underline-opacity-0"
          href="./register"
        >
          Register now.
        </a>
      </p>
    </>
  );
}

export default Login;
