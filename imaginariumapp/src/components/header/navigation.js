import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import Logo from './logo';
import NavItem from './navItem';
import NavSearch from './search';

export default function Navigation () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Logo />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <NavItem linkURL="/index.html" linkTitle="Home" />
                            <NavItem linkURL="#" linkTitle="Sell" />
                            <NavItem linkURL="#" linkTitle="Sign In" />
                            <NavItem linkURL="/cart.html" linkTitle="Cart" />
                        </ul>
                        <NavSearch />
                    </div>
                  </nav>
    );
};
