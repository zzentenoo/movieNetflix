import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

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
