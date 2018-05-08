import React from 'react';
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

WebFont.load({
    google: {
        families: ['Crimson Text']
    }
});

export default function Logo ({color, size, transform}) {
    const styles = {
        color: Logo.colors[color],
        fontSize: Logo.sizes[size],
        'text-transform': 'uppercase',
        'font-family': 'Crimson Text Semi-Bold'
    };

    return (
        <a className="navbar-brand logo" style={styles} href="./"><h1 >Imaginarium</h1></a>
    );
};

Logo.propTypes = {
    /* The color of the Logo */
    color: PropTypes.string,
    /* The Size of the Logo */
    size: PropTypes.oneOf(['small', 'normal', 'large'])
};

Logo.defaultProps = {
    color: 'gold',
    size: 'normal'
};

Logo.sizes = {
    small: '14px',
    normal: '20px',
    large: '28px'
};

Logo.colors = {
    gold: 'rgb(208,168,10)',
    orange: 'rgb(254,134,55)',
    blueGray: 'rgb(44,48,54)',
}