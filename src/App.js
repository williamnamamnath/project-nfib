import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NF1 from "./pages/NF1";

import styled from 'styled-components';

function App() {
  return (
    <Router>
        <Navbar />
        <PageSpacing />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-nfib" element={<NF1 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
    </Router>
  );
}; 

const PageSpacing = styled.div`
@media all and (min-width: 360px) and (max-width: 969px) {
  margin: 20px 0 50px 0;

}

  @media all and (min-width: 969px) {
    margin: 50px 0 50px 0;
  }
`

export default App;
