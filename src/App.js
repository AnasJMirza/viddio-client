import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

function App() {
  return (
    <Container>
      <Menu />
      <Navbar />
    </Container>
  );
}

export default App;


const Container = styled.div`
  display: flex;
  
`
