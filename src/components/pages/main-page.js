import React from 'react';
import MenuList from '../menu-list';
import MenuSort from "../menu-sort";
import MenuAddProduct from "../menu-add-product";

const MainPage = () => {
    return (
        <div>
            <MenuSort/>
            <MenuList/>
            <MenuAddProduct/>
        </div>
    )
}

export default MainPage;
