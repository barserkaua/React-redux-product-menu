import React from 'react';
import './app-header.scss';
import {Link} from "react-router-dom";

const AppHeader = () => {

    return (
        <header className="header">
            <Link className="header__link" to="/">
                Home
            </Link>
        </header>
    )
};

export default AppHeader;
