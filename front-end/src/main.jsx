import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './Auth/AuthContext.jsx';
import './index.css';
import App from './TemplateAppComponents/App.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import FrontEnd from './pages/FrontEnd.jsx';
import ProtectedRoute from './Auth/ProtectedRoute.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="front-end" element={<FrontEnd />} />
            <Route path="/dashboard" element={<ProtectedRoute>{/* <Dashboard /> */}</ProtectedRoute>} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
