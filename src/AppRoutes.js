import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { InitialPage } from './pages/InitialPage';
import { ExperiencePage } from './pages/ExperiencePage/index.jsx';
import { NotFoundPage404 } from './pages/NotFoundPage404';

const AppRoutes = ()=> (
  <Routes>
    <Route exact path="/" element={<InitialPage />} />
    <Route exact path="/experience" element={<ExperiencePage />} />
    <Route path="*" element={<NotFoundPage404 />} />
  </Routes>
);

export  { AppRoutes };
