import { useGoogleLogin } from "@react-oauth/google";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function GoogleAuth({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) =>
      dispatch(loginWithGoogle(navigate, codeResponse?.access_token)),
  });

  return (
    <Button
      variant="outline-secondary"
      className="w-100 d-flex justify-content-center"
      onClick={() => login()}
    >
      <div className="d-flex justify-content-center gap-2">
        <img
          src="src\assets\icons\google-logo.svg"
          alt=""
          className="object-fit-contain"
          style={{ width: 1.5 + "rem" }}
        />
        {children}
      </div>
    </Button>
  );
}

export default GoogleAuth;
