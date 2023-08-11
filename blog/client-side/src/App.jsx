import React from 'react';
import Home from './page/Home';
import CreatePost from './page/CreatePost';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/milligram/dist/milligram.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>}/> 
          <Route path="/create"  element={<CreatePost/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;