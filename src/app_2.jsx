import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Rating from './jsx/rating';

const App2 = () => {
    return (
        <>
            <Rating/>
        </>
    )
}

ReactDom.render(<App2 />, document.getElementById('root'));