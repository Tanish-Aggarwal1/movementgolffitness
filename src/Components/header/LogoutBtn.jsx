import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {clearSession} from '../../store/authSlice'
function LogoutBtn() {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    authService.logout()
    .then(() => {
      dispatch(clearSession())
    })
  }


  return (
      <button className="inline-block px-6 py-2 duration-200 hover:text-teal-600" 
      onClick={handleLogout}>
      Logout
    </button>
  )
}

export default LogoutBtn