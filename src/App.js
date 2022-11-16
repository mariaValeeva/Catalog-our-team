import React from 'react';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";


import RegistrationWindow from './components/RegistrationWindow';
import Catalog from './components/Catalog';
import Profile from './components/Profile';
import EnterWindow from './components/EnterWindow';


function App() {

  const [profile, openProfile] = React.useState([]);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<RegistrationWindow />} />
        <Route path="/enter" element={<EnterWindow />} />
        <Route path="/catalog" element={<Catalog openProfile={openProfile} />} />
        <Route path="/profile" element={<Profile profile={profile} />} />
      </Routes>
    </div>
    
  );
}

export default App;
