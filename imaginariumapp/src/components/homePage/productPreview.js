import React from 'react';
// import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './productPreview.css';
import ProductCard from './productCard';
import Bunnies from '../../images/willowynn/bunnies.jpg';
import Quilt from '../../images/lukehaynes/virginiawilcox32.jpg';


// import products array
// get length of array
// get the last 20 products in the array
// for each of the products, return a ProductCard

export default function ProductsPreview () {
        return (
            <div id="productPreview">
        <div className="row">  
                <h2>Newest Products</h2>
                </div>
                <div className="row">
                    <ProductCard imageURL={Bunnies} imageAlt="Willowynn hand-made stuffed bunnies" productTitle="Stuffed Bunnies" productDescription="Handcrafted and designed by Willowynn for children ages 3 and older" />
                    <ProductCard imageURL={Quilt} imageAlt="Virginia Wilcox Quilt" productTitle="Virginia Wilcox Quilt" productDescription="Handcrafted and designed by Luke Haynes" />
                    <ProductCard imageURL={Bunnies} imageAlt="Willowynn hand-made stuffed bunnies" productTitle="Stuffed Bunnies" productDescription="Handcrafted and designed by Willowynn for children ages 3 and older" />
                    <ProductCard imageURL={Bunnies} imageAlt="Willowynn hand-made stuffed bunnies" productTitle="Stuffed Bunnies" productDescription="Handcrafted and designed by Willowynn for children ages 3 and older" />
                </div>
        </div>
        );
};