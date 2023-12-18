import { Container, Navbar } from 'react-bootstrap';

import Presence from './views/Presence';
import Header from './views/Header';

import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './views/Layout';
import Trombinoscope from './views/Trombinoscope';
import TrombinoscopeV2 from './views/Trombinoscope_v2';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Presence />} />
          <Route path="trombinoscope" element={<Trombinoscope />} />
          <Route path="trombinoscope-v2" element={<TrombinoscopeV2 />} />
          <Route path="presence" element={<Presence />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
