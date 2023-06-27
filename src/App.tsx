import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import './index.scss';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import CardPage from './pages/CardPage/CardPage';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:item" element={<CardPage />} />
      </Routes>
    </>
  );
}

export default App;
