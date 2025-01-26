import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {Logo, Container, Login} from '../index'

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
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Profile",
      slug: "/profile",
      active: authStatus
    }
  ];

  return(
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>  
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
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
