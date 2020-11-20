import { Switch, Route } from "react-router-dom";
import { Row } from 'react-bootstrap';

const NavRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Row><h1>Headlines below...</h1></Row>
            </Route>
            <Route exact path="/markets">
                <Row><h1>Markets below...</h1></Row>
            </Route>
            <Route path="/technology">
                <Row><h1>technology below...</h1></Row>
            </Route>
            <Route exact path="/world">
                <Row><h1>world below...</h1></Row>
            </Route>
            <Route path="/search/:searchQuery">
                <Row><h1>search results below...</h1></Row>
            </Route>
            <Route path="/portfolio">
                <Row><h1>Portfolio</h1></Row>
            </Route>
        </Switch>
    );
}
 
export default NavRoutes;