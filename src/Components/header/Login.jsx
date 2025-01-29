import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { setSession } from "../../store/authSlice";

function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  //local state to see session
  const [session, setSessionState] = useState(null);

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const session = await authService.createSession();
      console.log(`session in Login`, session);
      
      if (session) {
        setSessionState(session);
        dispatch(
          setSession({
            session, 
          })
        );
      } else {
        throw new Error("Failed to create session");
      }
    } catch (error) {
      setError(error.message); 
      console.error("Login failed", error);
    } finally {
      setLoading(false); 
    }
  };




  return (
    <>
      <button className="inline-block px-6 py-2 duration-200 hover:text-teal-600" 
       onClick={handleLogin}>Login</button>
      {session && (
        <div>
          <h2>Session Details:</h2>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default Login;
