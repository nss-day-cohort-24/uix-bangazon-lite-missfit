import React from 'react';
import PropTypes from 'prop-types';

export default function NavItem ({linkTitle, linkURL}) {

    return (
        <li className="nav-item">
            <a className="nav-link" href={linkURL}>{linkTitle}</a>
        </li>
    );
};