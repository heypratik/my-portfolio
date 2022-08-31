import './App.css';
import Intro from './Intro';
import About from './About';
import Projects from './Projects'
import Contact from './Contact';
import Footer from './Footer';
import Nav from './Nav';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4b1dd0',
    },
    secondary: {
      main: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <Nav />
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
    </ThemeProvider>
);
}

export default App;
