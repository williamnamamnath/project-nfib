import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import styled from 'styled-components';

function App() {
  return (
    <>
    <Navbar />
    <PageSpacing />
    <Home />
    </>
  );
}; 

const PageSpacing = styled.div`
  margin: 50px 0 50px 0;
`

export default App;
