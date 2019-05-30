import React, { Component } from 'react';
import List from './List';
import './App.css';
import { images } from '../asset';

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

    render() {
        // console.log(this.state.a);
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
