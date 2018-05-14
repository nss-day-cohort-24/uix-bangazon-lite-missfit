import React from 'react';
// import PropTypes from 'prop-types';
// import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'jquery/dist/jquery.slim.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { RegistrationForm } from './registrationForm';
import { SignInForm } from './signinForm';

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
                        <SignInForm />
                        <RegistrationForm />
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};