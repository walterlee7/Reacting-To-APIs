import React, { Component } from 'react';
import List from './List';
import People from './People';
import Stats from './Stats';
import logo from '../studiologo.jpg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            a: [],
            l: 0,
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

    handleFilmOutput(event) {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({ a: data, l: 1 });
            });
    }

    handlePeopleOutput(event) {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({ a: data, l: 2 });
            });
    }

    handleStatsOutput(event) {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({ a: data, l: 3 });
            });
    }

    render() {
        // if (this.state.l === 0) {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
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
                    <button
                        onClick={(event) => { return this.handleStatsOutput(event) }}
                    >Load Stats</button>
                </div>
            </div>
        );
        // }


        // if (this.state.l === 1) {
        //     return (
        //         <div className="App">
        //             <header className="App-header">
        //                 <img src={logo} className="App-logo" alt="logo" />
        //                 <h1 className="App-title">Films</h1>
        //             </header>
        //             <div className="App-intro">
        //                 <button
        //                     onClick={(event) => { return this.handleFilmOutput(event) }}
        //                 >Load Films</button>
        //             </div>
        //             <div className="App-intro">
        //                 <button
        //                     onClick={(event) => { return this.handlePeopleOutput(event) }}
        //                 >Load People</button>
        //             </div>
        //             <div className="App-intro">
        //                 <button
        //                     onClick={(event) => { return this.handleStatsOutput(event) }}
        //                 >Load Stats</button>
        //             </div>
        //             <div className="App-intro card">
        //                 <List film={this.state.a} />
        //             </div>

        //         </div>
        //     );
        // }

        // if (this.state.l === 2) {
        //     return (
        //         <div className="App">
        //             <header className="App-header">
        //                 <img src={logo} className="App-logo" alt="logo" />
        //                 <h1 className="App-title">People</h1>
        //             </header>
        //             <div className="App-intro">
        //                 <button
        //                     onClick={(event) => { return this.handleFilmOutput(event) }}
        //                 >Load Films</button>
        //             </div>
        //             <div className="App-intro">
        //                 <button
        //                     onClick={(event) => { return this.handlePeopleOutput(event) }}
        //                 >Load People</button>
        //             </div>
        //             <div className="App-intro">
        //                 <button
        //                     onClick={(event) => { return this.handleStatsOutput(event) }}
        //                 >Load Stats</button>
        //             </div>
        //             <div className="App-intro card">
        //                 <People film={this.state.a} />
        //             </div>
        //         </div>
        //     );
        // }

        // if (this.state.l === 3) {
        //     return (
        //         <div className="App">
        //             <header className="App-header">
        //                 <img src={logo} className="App-logo" alt="logo" />
        //                 <h1 className="App-title">Stats</h1>
        //             </header>
        //             <div className="App-intro">
        //                 <button
        //                     onClick={(event) => { return this.handleFilmOutput(event) }}
        //                 >Load Films</button>
        //             </div>
        //             <div className="App-intro">
        //                 <button
        //                     onClick={(event) => { return this.handlePeopleOutput(event) }}
        //                 >Load People</button>
        //             </div>
        //             <div className="App-intro">
        //                 <button
        //                     onClick={(event) => { return this.handleStatsOutput(event) }}
        //                 >Load Stats</button>
        //             </div>
        //             <div className="App-intro card">
        //                 <Stats film={this.state.a} />
        //             </div>
        //         </div>
        //     );
        // }


    }
}

export default App;
