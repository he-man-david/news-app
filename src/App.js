import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/navbar/navbar';
import StockButler from './components/stockButler/stockButler'
import NewsWall from './components/newsWall/newsWall';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <Router>
                    <Row><StockButler></StockButler></Row>
                    <Row><NavBar></NavBar></Row>
                    <Row><NewsWall></NewsWall></Row>
                </Router>
            </Container>
        );
    }
}
 
export default App;