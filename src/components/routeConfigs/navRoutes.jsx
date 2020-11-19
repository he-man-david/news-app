import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Row } from 'react-bootstrap';
import NewsWall from '../newsWall/newsWall';

const NavRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Row><NewsWall routeName="headline"></NewsWall></Row>
            </Route>
            <Route path="/tech">
                <Row><NewsWall routeName="technology"></NewsWall></Row>
            </Route>
            <Route path="/portfolio">
                <Row><h1>Portfolio</h1></Row>
            </Route>
        </Switch>
    );
}
 
export default NavRoutes;