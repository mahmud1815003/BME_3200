import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Hospitals from './pages/Hospitals';
import Institues from './pages/Institues';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Patinet from './pages/Patinet';
import Doctor from './pages/Doctor';
import HospitalAdmin from './pages/HospitalAdmin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/institues" element={<Institues />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/patient" element={<Patinet />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/hosptialadmin" element={<HospitalAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
