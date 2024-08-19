import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BadGateWat from './components/badgateway';
import Home from './components/home';
import Iconic404 from './components/Iconic404';
import ServerError from './components/ServerError';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/badgateway' element={<BadGateWat />} />
        <Route path='/servererror' element={<ServerError />} />
        <Route path='*' element={<Iconic404 />} /> 
      </Routes>
    </Router>
  );
}

export default App;
