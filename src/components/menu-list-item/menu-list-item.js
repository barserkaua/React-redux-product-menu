import React from 'react';
import './menu-list-item.scss';
import {Link} from "react-router-dom";
import {deleteProduct} from "../../actions";
import {useDispatch} from "react-redux";

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
    const dispatch = useDispatch()

    return (
        <li className="menu__item">
            <div className="menu__name">{name}</div>
            <img className="menu__img" src={imageUrl} alt={name}></img>
            <div className="menu__weight">Weight: <span>{weight}g</span></div>
            <div className="menu__count">Count: <span>{count} in stock</span></div>
            <p className="menu__description">description: <span>{handleChangeDescription(description)}</span></p>
            <div className="menu__btn">
                <Link to={`/${id}`}>
                    <button className="menu__btn__detail">More details</button>
                </Link>
                <button type="submit" className="menu__btn__delete" onClick={() => dispatch(deleteProduct(id))}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    )
}

export default MenuListItem;