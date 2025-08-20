import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import components
import Header from './components/common/Header';

// Import pages
import Home from './pages/Home';
import StartProject from './pages/StartProject';
import Completed from './pages/Completed';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import EmailSent from './pages/EmailSent';

// Theme
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start-project" element={<StartProject />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/email-sent" element={<EmailSent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
