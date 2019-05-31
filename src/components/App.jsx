import React, { Component } from 'react';
import List from './List';
import './App.css';
import { images } from '../asset';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            a: [],
            lineHeightChange: 0,
            opacityChange: 0
        }

        this.slide = this.slide.bind(this);
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
                console.log(newData);
                this.setState({ a: newData });
            });
    }

    slide = () => {
        this.setState({
            lineHeightChange: 1,
            opacityChange: 1
        })
    }

    render() {
        // console.log(this.state.a);
        console.log(this.slide);
        return (
            <div className="App">
                <h2 className="App-header">
                    React API Fetch - Studio Ghibli API
                </h2>

                <div className="card-container">
                    <List slide={this.slide} film={this.state.a} height={this.state.lineHeightChange} opacity={this.state.opacityChange} />
                </div>

            </div>
        );
    }
}

export default App;
