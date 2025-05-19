import React from 'react';
import Settings from './Settings';
import Documentation from './Documentation';
import Content from './Content';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { navLinkClass } from './Styles';
import Apps from './Apps';

function App() {
  return (
    <Router>
      <div>
        <nav className="flex justify-center space-x-6 text-2xl p-4">
          <NavLink to="/apps" end className={navLinkClass}>Apps</NavLink>
          <NavLink to="/documentation" className={navLinkClass}>Documentation</NavLink>
          <NavLink to="/content" className={navLinkClass}>Content</NavLink>
          <NavLink to="/settings" className={navLinkClass}>Settings</NavLink>
        </nav>

        <Routes>
          <Route path="/apps" element={<Apps/>} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/content" element={<Content />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;