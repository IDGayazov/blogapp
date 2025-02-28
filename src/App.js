import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/index.tsx';
import Footer from './components/Footer/index.tsx';

import Home from './pages/Home.tsx';
import Blog from './pages/Blog.tsx';
import About from './pages/About.tsx';

import './styles/global.css';
import Article from './pages/Article.tsx';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div id="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/article/:id" element={<Article/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
