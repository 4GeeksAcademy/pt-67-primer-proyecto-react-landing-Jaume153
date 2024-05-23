import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container my-4">
        <div className="row">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
