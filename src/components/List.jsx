import React from 'react';

const List = (props) => {
    let listItems = props.film.map((item) => {
        console.log(item.imageUrl);
        return (
            <div key={item.id} className="card">
                {item.imageUrl ? (
                    <img src={item.imageUrl} alt="movie" />
                ) : null}

                <div className="t">
                    <div>Title: {item.title}</div>
                </div>
                <div className="t">
                    <div>Description: {item.description}</div>
                </div>
                <div className="p">
                    <div>Director: {item.director}</div>
                </div>

                <div className="p">
                    <div>Producer: {item.producer}</div>
                </div>
                <div className="s">
                    <div>Release Date: {item.release_date}</div>
                </div>
                <div className="s">
                    <div>RT Score: {item.rt_score}</div>
                </div>
            </div>


        );
    });
    return (
        <div className="h5">{listItems}</div>
    );
}

export default List;
