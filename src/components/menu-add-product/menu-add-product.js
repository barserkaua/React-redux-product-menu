import React from 'react';
import {checkNumInput} from "./index";

const MenuAddProduct = () => {
    return (
        <form className=''>
            <div className="menu__item item_block">
                <input type='text' className="" alt="name" placeholder="Name product"/>
                <input type='text' className="" alt="weight" placeholder="Weight product"/>
                <input type='number' className="" alt="count" placeholder="Count"/>
                <textarea className="" alt="description" placeholder="Write some description..."/>
                <div className="menu__size">Size:
                    <span>{size.width}x{size.height} (the sizes are specified in millimeters)</span>
                </div>
            </div>
        </form>
    )
}

export default MenuAddProduct;