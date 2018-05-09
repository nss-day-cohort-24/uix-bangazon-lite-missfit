import React from 'react';
// import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default function ProductCard ({imageURL, imageAlt, productTitle, productDescription, productPage}) {
    return(
        <div className="col-sm-3"> 
        <div className="card">
            <img className="card-img-top" src={imageURL} alt={imageAlt} />

            <div className="card-body">
                <h5 className="card-title">{productTitle}</h5>
                <p className="card-text">{productDescription}</p>
                <a href={productPage} className="btn btn-primary">View</a>
            </div>
        </div>
        </div>
    );
};