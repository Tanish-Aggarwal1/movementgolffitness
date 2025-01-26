import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";
import { setSession } from "../../store/authSlice";

function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const loginSuccess = await authService.createSession();

      if (loginSuccess) {
        const session = await authService.getSession();
        if (session) dispatch(setSession(session));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  return <button onClick={handleLogin}>Login</button>
}

export default Login;
