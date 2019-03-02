import React from 'react';

const Home = () => {
    return(
        <div>
            <div> im a component da </div>
            <button onClick={ () => console.log("Hi there!") } > Press me! </button>
        </div>
    );
};

export default {
    component: Home
};