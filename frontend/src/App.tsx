import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { ToastProvider } from './components/Toasts';
import LoginRoutes from './pages/Login';
import GalleryRoutes from './pages/Gallery';
import axios from 'axios';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Token ${token}`;
      navigate('/gallery/');
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <ToastProvider>
      <div className="App">
        <Routes>
          <Route index path="/*" element={<LoginRoutes />} />
          <Route path="/gallery/*" element={<GalleryRoutes />} />
        </Routes>
      </div>
    </ToastProvider>
  );
}

export default App;
