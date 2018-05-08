import React from 'react';
import NavItem from './navItem';

export default function Navigation () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar w/ text</a>
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
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> 
                    </div>
                  </nav>
    );
};
