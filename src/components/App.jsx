import React, { Component } from 'react';
import List from './List';
// import People from './People';
// import Stats from './Stats';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            a: [],
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({ a: data });
            });
    }

    // handleFilmOutput() {
    //     fetch('https://ghibliapi.herokuapp.com/films/')
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             this.setState({ a: data, l: 1 });
    //         });
    // }

    // handlePeopleOutput() {
    //     fetch('https://ghibliapi.herokuapp.com/people/')
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             this.setState({ a: data, l: 2 });
    //         });
    // }

    // handleStatsOutput() {
    //     fetch('https://ghibliapi.herokuapp.com/locations/')
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             this.setState({ a: data, l: 3 });
    //         });
    // }

    render() {

        return (
            <div className="App">
                <h2 className="App-header">
                    React API Fetch - Studio Ghibli API
                </h2>

                <div className="App-intro card">
                    <List film={this.state.a} />
                </div>

            </div>
        );
    }
}

export default App;
