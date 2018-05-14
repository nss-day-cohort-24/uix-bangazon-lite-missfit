import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export function NavItem ({linkTitle, linkURL}) {

    return (
        <li className="nav-item">
            <a className="nav-link" href={linkURL}>{linkTitle}</a>
        </li>
    );
};

export function SignIn () {
    return (
        <li className="nav-item">
            <a className="nav-link" data-toggle="modal" data-target="#exampleModal">Sign In</a>
        </li>
    );
};