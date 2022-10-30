import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { ToastProvider } from './components/Toasts'
import LoginRoutes from './pages/Login'

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
  }, [])

  return (
    <ToastProvider>
      <div className='App'>
        <Routes>
          <Route index path='/*' element={<LoginRoutes />} />
        </Routes>
      </div>
    </ToastProvider>
  )
}

export default App
