import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from './appwrite/auth'
import { setSession, clearSession } from './store/authSlice'
import { Outlet } from "react-router-dom";
import {Header, Footer} from './Components/index'



function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`useEffect ran`);
    
    authService.getSession()
    .then((session) => {
      if(session) {
        dispatch(setSession(session))
      }else{
        dispatch(clearSesssion())
      }
    } )
    .finally(() => setLoading(false))
  }, [])

return !loading ? (
  <div className="flex flex-wrap min-h-screen content-between">
    <div className="w-full block">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  </div>
): null
}

export default App;
