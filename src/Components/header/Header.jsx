import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';
import {Logo, Container, Login, LogoutBtn} from '../index'

function Header() {
const authStatus = useSelector((state) => state.auth.isAuthenticated); 
const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "About",
      slug: "/about",
      active: true
    },
    {
      name: "Opportunities",
      slug: "/opportunities",
      active: true
    },
    {
      name: "Contact",
      slug: "/contact",
      active: true
    },
    {
      name: "Profile",
      slug: "/profile",
      active: authStatus
    }
  ];

  return(
    <header className='sticky top-0 left-0 z-50 flex min-h-[15vh] w-full items-center bg-white py-3'>
      <Container>
        <nav className='flex w-full justify-around'>
          <div className='mr-4 py-2'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex'>
            {navItems.map((item) =>  
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-block px-6 py-2 duration-200 hover:text-teal-600'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {
              authStatus ? (
                <li>
                  <LogoutBtn />
                </li>
              ) : (
                <li>
                  <Login />
                </li>
              )
            }
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header;
