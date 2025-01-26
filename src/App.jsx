import React, { useState, useEffect } from "react";
import authService from "./appwrite/auth";
import {Header, Profile} from './Components/index.js';

function App() {
  // const [session, setSession] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [sheetData, setSheetData] = useState(null);

  // // Fetch session details after OAuth redirection
  // useEffect(() => {
  //   const fetchSession = async () => {
  //     try {
  //       const session = await authService.getSession();
  //       setSession(session);
  //     } catch (error) {
  //       console.log("No active session", error);
  //     }
  //   };

  //   fetchSession();
  // }, []);

  // const handleLogin = async () => {
  //   try {
  //     setLoading(true);
  //     await authService.createSession();
  //   } catch (error) {
  //     console.error("Login failed", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleFetchData = async () => {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const response = await fetch('http://localhost:5000/api/sheet-data');
  //     if(!response.ok) {
  //       throw new Error(`Failed to fetch data: ${response.statusText}`);
  //     }
  //     const data = await response.json();
  //     setSheetData(data);
  //   } catch (error) {
  //     console.error("Error fetching from backend", error);
  //     setError("Failed to fetch data");
  //   } finally{
  //     setLoading(false);
  //   }
    
  // };

  return ( <>
    {/* <Header />

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

      <div className="sheet">
        <h1>sheet test fetch</h1>
        <button onClick={handleFetchData}>
          {loading ? "Fetching data..." : "Fetch Data"}
        </button>

        {error && <p className="text-red-500">{error}</p>}

        {sheetData && (
          <div>
            <h2>Fetched Data:</h2>
            <pre>{JSON.stringify(sheetData, null, 2)}</pre>
          </div>
        )}
      </div>

    </div> */}
    <Profile/>
    
    </>
  );
}

export default App;
