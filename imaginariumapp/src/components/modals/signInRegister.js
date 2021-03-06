import React from 'react';
// import PropTypes from 'prop-types';
// import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'jquery/dist/jquery.slim.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function SignInModal (){
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-signIn" role="tab" aria-controls="nav-signIn" aria-selected="true">Sign In</a>
                            <a className="nav-item nav-link" id="nav-register-tab" data-toggle="tab" href="#nav-register" role="tab" aria-controls="nav-register" aria-selected="false">Register</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-signIn" role="tabpanel" aria-labelledby="nav-signIn-tab">
                            <form>
                                <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                            </form>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Sign In</button>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-register" role="tabpanel" aria-labelledby="nav-register-tab">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputName">Your Name</label>
                                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Your name goes here" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                                        <label htmlFor="exampleInputPassword2">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" />
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check here if you agree with our Terms of Service and Privacy Policy.</label>
                                    </div>
                                </form>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            </div>
        </div>
    );
};