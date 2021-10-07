import React from 'react';
import MenuList from '../menu-list';
import MenuSort from "../menu-main-btns";
import MenuAddProduct from "../menu-add-product";

const MainPage = () => {
    return (
        <div>
            <MenuSort/>
            <MenuList/>
            <MenuAddProduct form="form"/>
        </div>
    )
}

export default MainPage;
