import React from 'react';
import './App.css';

const List = (props) => {
    let listItems = props.film.map((item) => {

        return (
            
            <div key={item.id} className="card">
                {/* <pre>
                    {JSON.stringify(item, null, 2)}
                </pre> */}
                <div className="t">
                    <div>Title: {item.title}</div>
                </div>

                <div className="d">
                    <div>Description: {item.description}</div>
                </div>
            </div>
        );


    });
    return (
        <div className="h5">{listItems}</div>
    );
}

export default List;