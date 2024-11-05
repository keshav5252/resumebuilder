import React from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Templates from './pages/Templates';

const App = () => {
  return (
    <Router >
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/templates' element={<Templates />} />

      </Routes>
    </Router>
  )
}

export default App;
