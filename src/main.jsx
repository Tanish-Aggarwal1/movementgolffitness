import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {AuthLayout, Profile} from './Components/index.js'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/profile',
        element: (
        <AuthLayout authentication>
          <Profile/>
        </AuthLayout>
        )
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  
    <RouterProvider router={router}/>
  
  </Provider>
)
