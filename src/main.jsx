
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Root from './Components/Root';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Context/AuthProvider';
import Orders from './Components/Orders';
import PrivateRoutes from './Components/PrivateRoutes';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/orders",
        element: <PrivateRoutes><Orders/></PrivateRoutes>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </div>,
)
