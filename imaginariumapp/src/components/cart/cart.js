import React from 'react';
// import PropTypes from 'prop-types';
// import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default function Cart () {

    return(
         <main>
            <div class="row">
                    <div class="col-sm-4">
                        <h1>1 item is in your cart</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                            <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=First slide" alt="First slide [800x400]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16328efb01d%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16328efb01d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                    </div>
                    <div class="col-sm-4">
                        <div class="selectedProduct">
                            <h2>Vendor Name</h2>
                            <div class="card">
                                <div class="card-body">
                                    <h2>Item Name</h2>
                                    <p>Quantity: 1</p>
                                    <button>Change</button>
                                    <button>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h2>How will you pay?</h2>
                                <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                        <label class="form-check-label" for="exampleRadios1" >
                                          Default radio
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label class="form-check-label" for="exampleRadios2">
                                          Second default radio
                                        </label>
                                </div>
                                <p><strong>Total:</strong> $1100.00</p>
                                <p><strong>Shipping:</strong> $100.00</p>
                                <hr />
                                <p><strong>Grand Total:</strong> $1200.00</p>
                                <button>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
    </main>
    );

};