import React, { Component } from 'react';
import List from './List';
import './App.css';
import { images } from '../asset';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            films: [],
            heightChange: 0,
            opacityChange: 0,
            transition: 'all ' + 1 + 's ease-out'
        }

        this.slide = this.slide.bind(this);
        this.slideBack = this.slideBack.bind(this);
        this.sort = this.sort.bind(this);
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                let newData = data.map(item => {
                    // console.log(item);
                    let imageObj = images.find(image => {
                        return item.id === image.id
                    });
                    if (!!imageObj) item.imageUrl = imageObj.url
                    return item;
                });
                // console.log(newData);
                this.setState({ films: newData });
            });
    }

    slide = () => {

        //toggle for showing movie info
        const { open } = this.state

        open ? this.setState({
            open: false,
            heightChange: 0,
            opacityChange: 0
        }) : this.setState({
            open: true,
            heightChange: 100 + '%',
            opacityChange: 1
        })

        // console.log(this.state.open);
    }

    slideBack = () => {
        this.setState({
            heightChange: 0,
            opacityChange: 0
        })
    }

    sort(num) {
        function compareValues(key, order = 'asc') {
            return function (a, b) {
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    // property doesn't exist on either object
                    return 0;
                }

                const varA = (typeof a[key] === 'string') ?
                    a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string') ?
                    b[key].toUpperCase() : b[key];

                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return (
                    (order === 'desc') ? (comparison * -1) : comparison
                );
            };
        }
        let arr = this.state.films;
        //console.log(arr);

        if (num === 1) {
            arr.sort(compareValues('title'));
            //console.dir('after sort: ' + arr[2].title);

            this.setState({
                films: arr
            })
        } else if (num === 2) {
            arr.sort(compareValues('title', 'desc'));

            this.setState({
                films: arr
            })
        }

    }

    render() {
        // console.log(this.state.films);
        return (
            <div className="App">
                <h2 className="App-header">
                    React API Fetch - Studio Ghibli API
                </h2>

                <div id="instructions-container">
                    <h2 className="instructions">
                        ***click movie image to see info***
                    </h2>
                </div>

                <div id="sort-buttons">
                    <div id="button-container">
                        <button onClick={() => { this.sort(1) }}>Sort by A to Z</button>
                    </div>

                    <div id="button-container">
                        <button onClick={() => { this.sort(2) }}>Sort by Z to A</button>
                    </div>
                </div>

                <div className="card-container">
                    <List slideBack={this.slideBack} slide={this.slide} films={this.state.films} height={this.state.heightChange} opacity={this.state.opacityChange} transition={this.state.transition} />
                </div>

            </div>
        );
    }
}

export default App;
