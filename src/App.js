import logo from "./logo.svg";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { DarkTheme, LightTheme } from "./utils/Themes";
import { useState } from "react";
import Routes from "./routes/Routes";
import { BrowserRouter } from 'react-router-dom'

function App() {

  
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <Container>
       <BrowserRouter>
        <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
        <Main>
          <Navbar />
          <Routes />
        </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 11;
  background-color: ${({theme}) => theme.mainBg};
`;



