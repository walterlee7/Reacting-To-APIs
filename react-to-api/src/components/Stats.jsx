import React from 'react';
import './App.css';

const Stats = (props) => {
    let listItems = props.film.map((item) => {

        return (
            
            <div key={item.id} className="card">
                <div className="t">
                    <div>Release Date: {item.release_date}</div>
                </div>

                <div className="d">
                    <div>RT Score: {item.rt_score}</div>
                </div>
            </div>
        );


    });
    return (
        <div className="h5">{listItems}</div>
    );
}

export default Stats;