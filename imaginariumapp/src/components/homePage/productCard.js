import React from 'react';
// import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './productCard.css';

export default function ProductCard ({imageURL, imageAlt, productTitle, productDescription, productPage}) {
    return(
        <div className="col-sm-3"> 
        <div className="card">
            <div className="product-img-container">
                <img className="card-img-top product-img" src={imageURL} alt={imageAlt} />
            </div>

            <div className="card-body">
                <h5 className="card-title">{productTitle}</h5>
                <p className="card-text">{productDescription}</p>
                <a href={productPage} className="btn btn-primary">View</a>
            </div>
        </div>
        </div>
    );
};