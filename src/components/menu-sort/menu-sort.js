import React from 'react';
import './menu-sort.scss';
import {useDispatch} from 'react-redux';
import {menuSortByName, menuSortByCount} from "../../actions";

const MenuSort = () => {

    const dispatch = useDispatch();

    return (
        <div className="sort__item">
            <button onClick={() => {dispatch(menuSortByName())}} className="sort__count">Sort by name</button>
            <button onClick={() => {dispatch(menuSortByCount())}} className="sort__name">Sort by count</button>
        </div>
    )
}

export default MenuSort;
