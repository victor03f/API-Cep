import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageCEP from './pages/PageCEP';


function App() {



  return (
    <Router>
      <div> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PageCEP" element={< PageCEP/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
