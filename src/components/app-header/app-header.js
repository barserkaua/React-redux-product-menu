import React from 'react';
import './app-header.scss';
import {Link} from "react-router-dom";

const AppHeader = () => {

    return (
        <header className="header">
            <button onClick={() => {}} className="header__add__product">
                Add product
            </button>
            <Link className="header__link" to="/">
                Home
            </Link>
        </header>
    )
};

export default AppHeader;