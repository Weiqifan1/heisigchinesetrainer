import React from 'react';

const Services = props => {
    return (
        <div>
            <p>services</p>
            <p>{props.name}</p>
            <button onClick={props.greet}>greet</button>
        </div>
    );
}
export default Services;