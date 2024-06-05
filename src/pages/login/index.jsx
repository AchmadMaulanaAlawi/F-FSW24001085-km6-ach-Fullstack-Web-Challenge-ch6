import LoginComponent from "../../components/Login";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="vh-100 d-flex flex-column justify-content-center">
      <Row>
        <Col></Col>
        <Col md="5">
          <LoginComponent />
          <p className="mt-3 text-secondary">
            Don't have an account?{" "}
            <a
              className="link-underline link-underline-opacity-0"
              href="register"
            >
              Register now.
            </a>
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Login;
