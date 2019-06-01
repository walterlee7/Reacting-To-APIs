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

    render() {
        // console.log(this.state.films);
        return (
            <div className="App">
                <h2 className="App-header">
                    React API Fetch - Studio Ghibli API
                </h2>

                <h2 className="instructions">
                    **click movie image to see info**
                </h2>

                <div className="card-container">
                    <List slideBack={this.slideBack} slide={this.slide} films={this.state.films} height={this.state.heightChange} opacity={this.state.opacityChange} transition={this.state.transition} />
                </div>

            </div>
        );
    }
}

export default App;
