import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from "styled-components";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import alcoolimg from '../images/alcool.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${alcoolimg}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 350px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

class Navbar extends Component {
    
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul className="nav navbar-nav navbar-right">
      <li><Link to="/register" className="nav-link">
            <span className="glyphicon glyphicon-user"></span> Sign Up
          </Link></li>
          <li><Link to="/login" className="nav-link">
            <span className="glyphicon glyphicon-log-in"></span>
            Login
          </Link></li>
        </ul>

    )

    const userLink = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li> 
            <Link to="/login" className="nav-link" onClick={this.logOut.bind(this)}>
            <span className="glyphicon glyphicon-log-out"></span>
            Logout
          </Link></li>
      </ul>
    )

    return (
        <Styles>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Frencheer's
              </Link>
            </li>
            
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
      <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Frencheer's</h1>
            </Container>
        </Jumbo>
      </Styles>
    )
  }
}

export default withRouter(Navbar)