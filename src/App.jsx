import React, { useState, useEffect } from "react";
import authService from "./appwrite/auth";

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch session details after OAuth redirection
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await authService.getSession();
        setSession(session);
      } catch (error) {
        console.log("No active session", error);
      }
    };

    fetchSession();
  }, []);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await authService.createSession(); // Redirects to Google login
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Login with Google OAuth</h1>
      {!session ? (
        <button
          onClick={handleLogin}
          className="bg-red-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      ) : (
        <div>
          <h2>Welcome!</h2>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;