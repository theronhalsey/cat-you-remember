import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
