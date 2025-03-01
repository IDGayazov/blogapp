import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/index.tsx';
import Footer from './components/Footer/index.tsx';

import Home from './pages/Home.tsx';
import Blog from './pages/Blog.tsx';
import About from './pages/About.tsx';
import AuthPage from './pages/AuthPage/AuthPage.tsx';

import './styles/global.css';
import Article from './pages/Article.tsx';
import Profile from './pages/Profile.tsx';

import { AuthProvider } from './AuthContext.tsx';

function App() {

  const token = localStorage.getItem('token');

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <div id="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/article/:id" element={<Article/>} />
            <Route path="/auth" element={<AuthPage/>} />
            {
              <Route 
                path="/profile/:id" 
                element={token ? <Profile/> : <Navigate to="/auth" replace/>} 
              />
            }
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
