import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from "./Layout/MainLayout"
import Home from "./pages/Home"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home />},
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
