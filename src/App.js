import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NF1 from "./pages/NF1";
import NF1Team from "./pages/NF1Team";
import PastProjects from "./pages/PastProjects";
import NewsAndEvents from "./pages/NewsAndEvents";
import Footer from "./components/Footer";

import styled from 'styled-components';

function App() {
  return (
    <Router>
        <Navbar />
        <PageSpacing />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-nfib" element={<NF1 />} />
            <Route path="/nf1-team" element={<NF1Team />} />
            <Route path="/projects" element={<PastProjects />} />
            <Route path="/news-and-events" element={<NewsAndEvents />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
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
