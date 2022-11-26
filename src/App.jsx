import React,{useState , useEffect , useRef} from 'react';

import {Routes, Route , Link ,BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import MovieRoute from './components/MovieRoute';


export default function App() {
  

  return (
    
      <BrowserRouter>
      <Link to='/'>Home</Link>
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/:id" element={<MovieRoute/>} />
      </Routes>
      </BrowserRouter>
    
  );
}