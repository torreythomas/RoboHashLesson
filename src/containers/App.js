import React, { Fragment, Component } from 'react';
import Cardlist from '../components/Cardlist'
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll'
import "./App.css"

class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json();})
        .then(users => {this.setState({ robots: users})});}


// If the function was not an original part of React, use arrow functions.
    onSearchChange = (event)  => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return (!robots.length) ?
        <h1> Loading Robots</h1> :
                <Fragment>
                    <div className="tc">
                <h1 className="f1"> RoboFriends </h1>
                <Searchbox searchChange={this.onSearchChange} />
                <Scroll>
                <Cardlist robots={filteredRobots}/>
                </Scroll>
                </div>
                </Fragment>
        }
   
    };

export default App;