import LoginComponent from "../../components/Login"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

const Login = () => {
  return (
    <>
      <Row
        className="w-100 vh-100 w-100 m-0"
        xs={1}
        md={2}
      >
        <Col className="img-section p-1">
          <img
            src="src\assets\images\header.jpg"
            alt="car image"
            className="w-100 h-100 object-fit-cover overflow-hidden  rounded-5"
          />
        </Col>
        <Col className="login-section d-flex flex-column justify-content-center align-items-center">
          <div className="w-75">
            <h1 className="fw-semibold mb-5">Login</h1>
            <LoginComponent />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Login
