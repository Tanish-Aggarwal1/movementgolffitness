import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {clearSession} from '../../store/authSlice'
function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    authService.logout()
    .then(() => {
      dispatch(clearSession())
    })
  }


  return (
    <button onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutBtn