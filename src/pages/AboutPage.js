import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const AboutPage = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Welcome to our Pizza Shop!
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          At our pizza shop, we pride ourselves on serving the best pizza in town. Our dough is made fresh daily, and we use only the highest quality ingredients to ensure that every bite is delicious. Whether you're here for a quick lunch, a family dinner, or a late-night snack, we have something for everyone.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team is dedicated to providing excellent service and a friendly atmosphere. We believe that great food should be enjoyed in a great environment, and we strive to make every visit to our shop a memorable one.
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions or feedback, please don't hesitate to reach out to us. We're always happy to hear from our customers and are committed to improving our service.
        </Typography>
        <Box sx={{ marginTop: 4, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            Email: contact@pizzashop.com
          </Typography>
          <Typography variant="body1" paragraph>
            Phone: (123) 456-7890
          </Typography>
          <Typography variant="body1" paragraph>
            Address: 123 Pizza Street, Pizzaville, PX 12345
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AboutPage;
