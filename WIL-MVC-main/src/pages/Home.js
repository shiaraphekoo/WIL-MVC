import React from 'react';
import { Container, Typography, Box, Paper, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BusinessIcon from '@mui/icons-material/Business';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section with Gradient */}
      <Box
        sx={{
            background: 'linear-gradient(180deg, #2e7d32 0%, #4CAF50 100%)',
          color: 'white',
          textAlign: 'center',
          pt: 10,
          pb: 8,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          position: 'relative',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            Welcome to Xamu
          </Typography>
           <Typography variant="h6" paragraph>
            Professional Land Surveying & Soil Inspection Services
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/start-project')}
            sx={{
              mt: 3,
              backgroundColor: 'white',
              color: '#2e7d32',
              borderRadius: '25px',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#f5f5f5' },
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          >
            Start a Project
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
     <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          gutterBottom
          fontWeight="bold"
        >
          Our Services
        </Typography>

         <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3, height: '100%' }}>
              <BusinessIcon sx={{ fontSize: 50, color: '#2e7d32', mb: 2 }} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Project Management
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Comprehensive project management from consultation to final reporting.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3, height: '100%' }}>
              <InfoIcon sx={{ fontSize: 50, color: '#2e7d32', mb: 2 }} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Expert Analysis
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Professional soil inspection and land surveying with detailed reports.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3, height: '100%' }}>
              <ContactMailIcon sx={{ fontSize: 50, color: '#2e7d32', mb: 2 }} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Consultation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get expert advice for your land development projects.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

        {/* Call to Action */}
        <Container maxWidth="lg" sx={{ textAlign: 'center', mt: 8, mb: 12 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Ready to Get Started?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Contact us today and let’s bring your land development project to life with professional guidance.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mt: 3 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#2e7d32',
              borderRadius: '25px',
              px: 3,
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#388e3c' },
            }}
            onClick={() => navigate('/start-project')}
          >
            Start a Project
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{ borderRadius: '25px', px: 3, fontWeight: 'bold' }}
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
          <Button
            variant="text"
            size="large"
            sx={{ borderRadius: '25px', px: 3, fontWeight: 'bold' }}
            onClick={() => navigate('/about')}
          >
            Learn More
          </Button>
        </Box>
      </Container>
          </Box> 
  );
};

export default Home;
