import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import NavBar from './components/navbar/navbar';
import StockButler from './components/stockButler/stockButler';
import NavRoutes from './components/routeConfigs/navRoutes';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
    // TODO: do I need state here? Maybe convert in future;
    state = {  }
    render() { 
        return (
            <Container>
                <Router>
                    <Row><StockButler></StockButler></Row>
                    <Row><NavBar></NavBar></Row>
                    <NavRoutes></NavRoutes>
                </Router>
            </Container>
        );
    }
}
 
export default App;