import RegisterComponent from "../../components/Register";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const Register = () => {
  return (
    <Container className="vh-100 d-flex flex-column justify-content-center">
      <Row>
        <Col></Col>
        <Col md="5">
          <RegisterComponent />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Register;
