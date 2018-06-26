import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import { Container, Row, Col } from "./components/Grid";
import Card from './components/Card/Card';
import Images from './images'

let row1 = [];
let row2 = [];
let row3 = [];
let row4 = [];
let row5 = [];
let row6 = [];
let row7 = [];
let row8 = [];

const shuffleCards = function () {
  (function () {
    Images.sort(function (a, b) { return 0.5 - Math.random() });
  })();
  for (let i = 0; i < Images.length; i++) {
    if (i < 6) {
      (row1).push(Images[i])
    } else if (i < 12) {
      (row2).push(Images[i])
    } else if (i < 18) {
      (row3).push(Images[i])
    } else if (i < 24) {
      (row4).push(Images[i])
    } else if (i < 30) {
      (row5).push(Images[i])
    } else if (i < 36) {
      (row6).push(Images[i])
    } else if (i < 42) {
      (row7).push(Images[i])
    } else {
      (row8).push(Images[i])
    };
  };
};

const renderCards = function (row) {
  row.map(image => {
    console.log(row)
    return (
      <Card
        id={image.id}
        link={image.link}
      />
    )
  })
}

shuffleCards();

document.getElementsByClassName("card").onclick = function() {
  alert("I was clicked!")
  shuffleCards()
}

class App extends Component {

  state = {
    clicked: false
  }

  handleClick = event => {
    event.preventDefault();
    this.setState({
      clicked: true
    }).then(shuffleCards())
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Container>
          <Row>
            {row1.map(image => {
              return (
              <Card
              id={image.id}
              link={image.link}
              />
              )
            })}
          </Row>
          <Row>
            {row2.map(image => {
              return (
              <Card
              id={image.id}
              link={image.link}
              />
              )
            })}
          </Row>
          <Row>
            {row3.map(image => {
              return (
              <Card
              id={image.id}
              link={image.link}
              />
              )
            })}
          </Row>
          <Row>
            {row4.map(image => {
              return (
              <Card
              id={image.id}
              link={image.link}
              />
              )
            })}
          </Row>
          <Row>
            {row5.map(image => {
              return (
              <Card
              id={image.id}
              link={image.link}
              />
              )
            })}
          </Row>
          <Row>
            {row6.map(image => {
              return (
              <Card
              id={image.id}
              link={image.link}
              />
              )
            })}
          </Row>
          <Row>
            {row7.map(image => {
              return (
              <Card
              id={image.id}
              link={image.link}
              />
              )
            })}
          </Row>
          <Row>
            {row8.map(image => {
              return (
              <Card
              id={image.id}
              link={image.link}
              />
              )
            })}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
