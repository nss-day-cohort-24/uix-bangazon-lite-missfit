import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'jquery/dist/jquery.slim.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { CreateUser } from '../../DB-interactions/userInteractions';

function RegisterUser () {
    console.log('the registration button has been clicked');
};
//User fills in registration tab
//User clicks register button 
//Stores user input into user object
//Posts to database with new id



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
        <button id="registerUser" onClick={RegisterUser} type="button" className="btn btn-primary">Register</button>
    </div>
</div>