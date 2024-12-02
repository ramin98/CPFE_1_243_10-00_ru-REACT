import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Contacts from './components/Contacts.jsx'
import About from './components/About.jsx'
import ServiceContacts from './components/ServiceContacts.jsx'
import Item from './Item.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Используем App как базовый компонент
    children: [
      {
        index: true, // Указывает, что этот маршрут будет загружаться по умолчанию на `/`
        element: <Home />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
        children:[
          {
            path: 'service-contacts',
            element: <ServiceContacts />,
            children:[
              {
                path: 'item',
                element: <Item />,
              }
            ]
          }
        ]
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  }])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
