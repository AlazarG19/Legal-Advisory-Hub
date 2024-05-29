import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Forum from './components/Forum/Forum';
import Answers from './components/Forum/Answers';
import DetailPost from './components/Forum/DetailPost';
import ManageQuestion from './components/Forum/ManageQuestion';
import ManageAnswer from './components/Forum/ManageAnswer';
import ManageComment from './components/Forum/ManageComment';
import TrainAI from './components/Forum/TrainAI';
import Chatbot from './components/Forum/Chatbot';
function RRoutes() {
  return (
    <Routes>
      <Route path="/detail/:id" element={<DetailPost />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/answers/:id" element={<Answers />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/mquestion" element={<ManageQuestion />} />
      <Route path="/mcomments/:id" element={<ManageComment />} />
      <Route path="/manswers/:id" element={<ManageAnswer />} />
      <Route path="/train" element={<TrainAI />} />

    </Routes>
  );
}

export default RRoutes;
