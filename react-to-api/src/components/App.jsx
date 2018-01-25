import React, { Component } from 'react';
import List from './List';
import logo from '../components/logo.svg';
import './App.css';
import 'isomorphic-fetch';
import 'es6-promise';

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
                this.setState({a: data});
            });
           
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Films</h1>
                </header>
                <div className="App-intro">
                    <List film={this.state.a}/>
                </div>
            </div>
        );
    }
}

export default App;
