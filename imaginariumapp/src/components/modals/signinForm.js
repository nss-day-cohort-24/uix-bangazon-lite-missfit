import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'jquery/dist/jquery.slim.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { GetUser } from '../../DB-interactions/userInteractions';

function SignInUser () {
    console.log('the sign in button or link has been clicked');
    let userEmail = document.getElementById('singinEmail').value;
    let userPassword = document.getElementById('signinPassword');
    GetUser(userEmail);
}

export class SignInForm extends React.Component {
    render() {
        return (
            <div className="tab-pane fade show active" id="nav-signIn" role="tabpanel" aria-labelledby="nav-signIn-tab">
                <form>
                    <div className="form-group">
                    <label htmlFor="signinEmail">Email address</label>
                    <input type="email" className="form-control" id="singinEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="signinPassword">Password</label>
                    <input type="password" className="form-control" id="signinPassword" placeholder="Password" />
                    </div>
                </form>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={SignInUser}>Sign In</button>
                </div>
            </div>
        );
    }
}