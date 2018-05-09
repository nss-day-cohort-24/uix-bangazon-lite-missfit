import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';


export default function NavSearch () {
    return (
    <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form> 
    );
};