import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export const Header = ({getEdit}) => {
    return (
      <div className="topnav">
        <NavLink to="/">Home</NavLink>
        {getEdit?
        <NavLink to="/update">Update</NavLink>:
        <NavLink to="/create">Create</NavLink>
        }
        <div className="search-container">
          <form className="form-container">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    );
}
