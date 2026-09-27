import { createBrowserRouter, Navigate } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Mayorista from './pages/Mayorista'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: 'productos', Component: Productos },
        { path: 'pedidos', Component: Mayorista },
        { path: 'mayorista', element: <Navigate to="/pedidos" replace /> },
        { path: 'nosotros', Component: Nosotros },
        { path: 'contacto', Component: Contacto },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
