import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <>
        <div className="min-h-screen bg-page-bg max-h-screen bg-page-bg">


      <RouterProvider router={router} />
        </div>
        </>
  )
}

export default App
