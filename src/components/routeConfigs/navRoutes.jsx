import { Switch, Route } from "react-router-dom";
import { Row } from 'react-bootstrap';
import NewsWall from '../newsWall/newsWall';

const NavRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Row><NewsWall routeName="headlines"></NewsWall></Row>
            </Route>
            <Route exact path="/markets">
                <Row><NewsWall routeName="markets"></NewsWall></Row>
            </Route>
            <Route path="/technology">
                <Row><NewsWall routeName="technology"></NewsWall></Row>
            </Route>
            <Route exact path="/world">
                <Row><NewsWall routeName="world"></NewsWall></Row>
            </Route>
            <Route path="/search/:searchQuery">
                <Row><NewsWall routeName="search"></NewsWall></Row>
            </Route>
            <Route path="/portfolio">
                <Row><h1>Portfolio</h1></Row>
            </Route>
        </Switch>
    );
}
 
export default NavRoutes;