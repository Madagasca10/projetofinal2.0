import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    const NavStyle = {
        color:'#f70505'
    }
    return(
        
        <nav>
            <ul className="nav-links">
                <Link style={NavStyle} to="/RecipesPage">
                <img src="/images/3646233-200.png"></img>
                </Link>
                <Link style={NavStyle} to="/Favorites">
                    <img src="/images/1383774-200.png"></img>
                </Link>
                <Link style={NavStyle} to="/Registration">
                    <img src="/images/2018816-200.png"></img>
                </Link>
                <Link style={NavStyle} to="/login">
                    <img src="/images/3710907-200.png"></img>
                </Link>
            </ul>
        </nav>


    )
}   

export default Nav;