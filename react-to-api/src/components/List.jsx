import React from 'react';


const List = (props) => {
    let listItems = props.film.map((item) => {

        return (
            
            <div key={item.id} className="card">
                <div className="t">
                    <div>{item.title}</div>
                </div>

                <div className="d">
                    <div>{item.description}</div>
                </div>
            </div>
        );


    });
    return (
        <div className="h5">{listItems}</div>
    );
}

export default List;