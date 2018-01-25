import React, { Component } from 'react';
import List from './List';
import People from './People';
import logo from '../studiologo.jpg';
import './App.css';
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            a: [],
            l: '',
        }

    }

    // componentDidMount() {
    //     fetch('https://ghibliapi.herokuapp.com/films/')
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             this.setState({ a: data });
    //         });
    // }

    handleFilmOutput(event) {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({ a: data, l: false });
            });
    }

    handlePeopleOutput(event) {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({ a: data, l: true });
            });
    }

    render() {
        if (this.state.l === false) {
            return (
                <div className="App">
                    <header className="App-header">
                    
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Films</h1>
                    </header>
                    <div className="App-intro">
                        <button
                            onClick={(event) => { return this.handleFilmOutput(event) }}
                        >Load Films</button>
                    </div>
                    <div className="App-intro">
                        <button
                            onClick={(event) => { return this.handlePeopleOutput(event) }}
                        >Load People</button>
                    </div>
                    <div className="App-intro">
                        <List film={this.state.a} />
                    </div>

                </div>
            );
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Films</h1>
                    </header>
                    <div className="App-intro">
                        <button
                            onClick={(event) => { return this.handleFilmOutput(event) }}
                        >Load Films</button>
                    </div>
                    <div className="App-intro">
                        <button
                            onClick={(event) => { return this.handlePeopleOutput(event) }}
                        >Load People</button>
                    </div>
                    <div className="App-intro">
                        <People film={this.state.a} />
                    </div>
                </div>
            );
        }

    }
}

export default App;
