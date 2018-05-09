import React from 'react';
// import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default function Jumbotron () {
    return (
        <div class="jumbotron">
            <h1 class="display-4">Welcome!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Create Your Account</a>
            <a class="btn btn-primary btn-lg" href="#newProducts" role="button">Explore Our Products</a>
        </div>
    );
};