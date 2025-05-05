import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Alumni from './pages/Alumni';
import ShikshaDaan from './pages/programs/ShikshaDaan';
import SanskritiBodh from './pages/programs/SanskritiBodh';
import Footer from './components/Footer';
import SupportChild from './pages/sponsor/SupportChild';
import SupportVidyaBharati from './pages/sponsor/SupportVidyaBharati';
import Classroom from './pages/sponsor/Classroom';
import Library from './pages/sponsor/Library';
import ToiletBlock from './pages/sponsor/ToiletBlock';

const theme = createTheme({
  palette: {
    primary: {
      main: '#841B2D', // Deep maroon - brand primary color
      light: '#9E2235',
      dark: '#6A1624'
    },
    secondary: {
      main: '#FF5733', // Vibrant orange - accent color
      light: '#FF7957',
      dark: '#E64A2E'
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA'
    },
    text: {
      primary: '#333333',
      secondary: '#666666'
    }
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#333333'
    },
    h2: {
      fontWeight: 600,
      color: '#333333'
    },
    h3: {
      fontWeight: 600,
      color: '#333333'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events" element={<Events />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/programs/shiksha-daan" element={<ShikshaDaan />} />
              <Route path="/programs/sanskriti-bodh" element={<SanskritiBodh />} />
              {/* Corrected route path for SupportChild */}
              <Route path="/support-child" element={<SupportChild />} />
              {/* Also keep the original path as an alternate route if needed */}
              <Route path="/support-vb" element={<SupportVidyaBharati />} />
              <Route path="/classroom" element={<Classroom />} />
              <Route path="/library" element={<Library />} />
              <Route path="/toilet-block" element={<ToiletBlock />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;