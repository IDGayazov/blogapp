import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/index.tsx';

import Home from './pages/Home.tsx';
import Blog from './pages/Blog.tsx';
import About from './pages/About.tsx';

import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      {/* <hr/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
