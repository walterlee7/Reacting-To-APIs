import React from 'react';


const People = (props) => {
    let peopleItems = props.film.map((item) => {

        return (
            
            <div key={item.id} className="card">
                <div className="d">
                    <div>{item.director}</div>
                </div>

                <div className="p">
                    <div>{item.producer}</div>
                </div>
            </div>
        );


    });
    return (
        <div className="h5">{peopleItems}</div>
    );
}

export default People;