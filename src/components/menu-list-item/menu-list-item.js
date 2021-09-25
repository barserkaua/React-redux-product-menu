import React from 'react';
import './menu-list-item.scss';
import {Link} from "react-router-dom";

const MenuListItem = ({menuItem}) => {
    const {name, count, imageUrl, description, weight, id} = menuItem;

    // change max length description to 120 characters
    const handleChangeDescription = (event) => {
        const desc = event.slice(0, 120);
        if (desc.length >= 120) {
            return `${desc}...`;
        } else {
            return desc;
        }
    }

    return (
        <li className="menu__item">
            <div className="menu__name">{name}</div>
            <img className="menu__img" src={imageUrl} alt={name}></img>
            <div className="menu__weight">Weight: <span>{weight}</span></div>
            <div className="menu__count">Count: <span>{count} in stock</span></div>
            <p className="menu__description">description: <span>{handleChangeDescription(description)}</span></p>
            <Link to={`/${id}`}>
                <button className="menu__btn">More details</button>
            </Link>
        </li>
    )
}

export default MenuListItem;