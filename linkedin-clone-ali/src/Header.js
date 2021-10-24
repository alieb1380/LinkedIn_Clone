import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search"

function Header() {
    return (
        <div className="header">
            <h2>this is header</h2>

            <div className="header__left">
                <img src="" alt="" />

                <div className="header__search">
                    {/* SearchIcon */}
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">

            </div>
        </div>
    )
}

export default Header
