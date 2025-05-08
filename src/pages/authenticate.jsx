import LogInForm from "../components/login-form/LoginForm";
import RegisterForm from "../components/register-form/RegisterForm";
import { useState, useContext, useEffect } from "react";
import { MainContext } from "../utils/context";
import { useNavigate } from "react-router-dom";

export default function Authenticate() {
  const [registerMode, setRegisterMode] = useState(false);
  const {user, loading} = useContext(MainContext);
  const navigate = useNavigate()
  useEffect(() => {
!loading && user && navigate("/")
  }, [loading, user])
  return registerMode ? (
    <div className="authenticate">
      <RegisterForm />
      <p>
        Already have an account ?{" "}
        <b
          className="authenticate__anchor"
          onClick={() => setRegisterMode(false)}
        >
          Login
        </b>
      </p>
    </div>
  ) : (
    <div className="authenticate">
      <LogInForm />
      <p>
        Don't have an account ?{" "}
        <b
          className="authenticate__anchor"
          onClick={() => {
            setRegisterMode(true);
          }}
        >
          Register
        </b>
      </p>
    </div>
  );
}
