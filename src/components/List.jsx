import React from 'react';

const List = (props) => {

    let listItems = props.film.map((item) => {
        //console.log(item.imageUrl);
        return (
            <div key={item.id} className="card">
                {item.imageUrl ? (
                    <img onClick={props.slide
                    }
                        src={item.imageUrl} alt="movie" />
                ) : null}
                <div style={{ lineHeight: props.height, opacity: props.opacity }}>
                    <div className="title">
                        <div>Title: {item.title}</div>
                    </div>
                    <div className="description">
                        <div>Description: {item.description}</div>
                    </div>
                    <div className="director">
                        <div>Director: {item.director}</div>
                    </div>
                    <div className="producer">
                        <div>Producer: {item.producer}</div>
                    </div>
                    <div className="date">
                        <div>Release Date: {item.release_date}</div>
                    </div>
                    <div className="score">
                        <div>RT Score: {item.rt_score}</div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className="h5">{listItems}</div>
    );
}

export default List;
