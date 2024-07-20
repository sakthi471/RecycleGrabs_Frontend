// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Register from './pages/Register';
import { Login } from './pages/Login';
import Home from './pages/Home';
import Layout from './components/Layout';
import Buy from './pages/Buy';
import Details from './pages/Details';


const App = () => {
  return (
    <AuthProvider>
      
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/buy/:id' element={<Details />} />


        </Routes>
      </Layout>
    </AuthProvider>

  );
};

export default App;
