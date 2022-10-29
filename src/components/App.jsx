import { Route, Routes } from 'react-router-dom';

import MainPage from 'pages/MainPage/MainPage';
import PlayingPage from 'pages/PlayingPage/PlayingPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/playing-page" element={<PlayingPage />} />
    </Routes>
  );
};
