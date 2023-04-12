import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {React} from 'react';
import Home from './pages/Home';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
