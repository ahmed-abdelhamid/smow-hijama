import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const HomePage = () => (
  <div className="homepage d-flex align-items-center">
    <div className="container text-white text-center">
      <h1>Website Title</h1>
      <p>Welcome to our website</p>
      <Button tag={Link} to="/contact" size="lg">
        Contact Us
      </Button>
    </div>
  </div>
);

export default HomePage;
