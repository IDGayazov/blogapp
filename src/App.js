import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/index.tsx';
import Footer from './components/Footer/index.tsx';

import Home from './pages/Home.tsx';
import Blog from './pages/Blog.tsx';
import About from './pages/About.tsx';
import AuthPage from './pages/AuthPage/AuthPage.tsx';

import './styles/global.css';
import Article from './pages/Article.tsx';
import Profile from './pages/Profile/Profile.tsx';

import { AuthProvider } from './AuthContext.tsx';
import PrivateRoute from './components/PrivateRoute/index.tsx';

function App() {
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
              <Route element={<PrivateRoute />}>
                <Route path="/profile/:id" 
                  element={<Profile />} 
                />
              </Route>
            }
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
