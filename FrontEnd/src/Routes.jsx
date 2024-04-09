import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Forum from './components/Forum/Forum';
import DetailPost from './components/Forum/DetailPost';

function RRoutes() {
  return (
    <Routes>
      <Route path="/detail" element={<DetailPost/>} />
      <Route path="/" element={<Forum/>} />
    </Routes>
  );
}

export default RRoutes;
