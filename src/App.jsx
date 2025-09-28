import React from 'react';
import Documentation from './Documentation';
import Content from './Content';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { navLinkClass } from './Components/Styles';

function App() {
  return (
    <Router>
      <div>
        <nav className="flex justify-center space-x-6 text-2xl p-4">
          <NavLink to="/documentation" className={navLinkClass}>Documentation</NavLink>
          <NavLink to="/editor" className={navLinkClass}>Table editor</NavLink>
        </nav>

        <Routes>
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/editor" element={<Content />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;