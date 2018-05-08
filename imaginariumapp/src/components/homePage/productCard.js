import React from 'react';
import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default function ProductCard ({imageURL, imageAlt, productTitle, productDescription, productPage}) {
    return(
        <div class="card">
            <img class="card-img-top" src={imageURL} alt={imageAlt} />

            <div class="card-body">
                <h5 class="card-title">{productTitle}</h5>
                <p class="card-text">{productDescription}</p>
                <a href={productPage} class="btn btn-primary">View</a>
            </div>
        </div>
    );
};