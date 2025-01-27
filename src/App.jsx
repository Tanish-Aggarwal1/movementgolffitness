import React, { useState, useEffect } from "react";
import {Login} from './Components/index.js'
import authService from "./appwrite/auth";
import { setSession } from "./store/authSlice.js";
import {Header, Profile} from './Components/index.js';
import { useDispatch } from "react-redux";


function App() {
  // const [session, setsession] = useState(null);
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
    
    <p className="font-playfair">hello checking font</p>
    </>
  );
}

export default App;
