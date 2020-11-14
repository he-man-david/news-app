import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/navbar/navbar';
import StockButler from './components/stockButler/stockButler'
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
                    <Row><Col><StockButler></StockButler></Col></Row>
                    <Row><Col><NavBar></NavBar></Col></Row>
                </Router>
            </Container>
        );
    }
}
 
export default App;