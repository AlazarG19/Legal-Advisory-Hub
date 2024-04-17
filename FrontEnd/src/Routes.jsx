import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Forum from './components/Forum/Forum';
import Answers from './components/Forum/Answers';
import DetailPost from './components/Forum/DetailPost';

function RRoutes() {
  return (
    <Routes>
      <Route path="/detail/:id" element={<DetailPost/>} />
      <Route path="/answers/:id" element={<Answers/>} />
      <Route path="/" element={<Forum/>} />
    </Routes>
  );
}

export default RRoutes;
