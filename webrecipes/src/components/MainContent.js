import React from "react";
import Home from './Home';
import Favourites from './Favourites';
import Recipes from './Recipes';
import Chefs from './Chefs';
import Browse from './Browse';
import { Route, Switch } from 'react-router-dom';
import '../style/index-home.css';
import Profile from "./Profile";
import CreateRecipe from "./CreateRecipe";
import NoContentFound from "./NoContentFound";
import Users from "./Users";
import Recipe from "./Recipe";

class MainContent extends React.Component {

    constructor(props) {
        super(props)
        this.user = props.user;
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route path='/' exact component={() => <Home url={`http://localhost:5000/api/user/${this.user.info.unique_name}/home`} user={this.user} />} />
                    <Route path='/favourites' exact component={() => <Favourites url={`http://localhost:5000/api/user/${this.user.info.unique_name}/favourites`} user={this.user} />} />
                    <Route path='/recipes' exact component={() => <Recipes url={`http://localhost:5000/api/user/${this.user.info.unique_name}/recipes`} user={this.user} />} />
                    <Route path='/subscriptions' exact component={() => <Chefs url={`http://localhost:5000/api/user/${this.user.info.unique_name}/subscriptions`} user={this.user} />} />
                    <Route path='/browse' exact component={() => <Browse user={this.user} />} />
                    <Route path='/profile/:username' exact component={() => <Profile user={this.user} />} />
                    <Route path='/recipe/:id' exact component={() => <Recipe user={this.user} />} />
                    <Route path='/create' exact component={() => <CreateRecipe user={this.user} />} />
                    <Route path='/users' exact component={() => <Users user={this.user} />} />
                    <Route component={() => <NoContentFound message="404" />} />
                </Switch>
            </main>
        );
    }
}


export default MainContent;