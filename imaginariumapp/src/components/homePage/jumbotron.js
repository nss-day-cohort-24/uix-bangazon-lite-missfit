import React from 'react';
// import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import { Colors, Fonts } from '../../styles/styles';

console.log('These are the colors:', Colors().gold);
console.log('These are the fonts:', Fonts());



export default function Jumbotron () {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Welcome to Imaginarium!</h1>
            <p className="lead">This is the place where artisans can premier and sell their hand-crafted work.</p>
            <hr className="my-4" />
            <p>In order to buy or sell, you must...</p>
            <a className="btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModal">Create Your Account</a>
        </div>
    );
};