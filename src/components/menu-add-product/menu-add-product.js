import React from 'react';
import './menu-add-product.scss';

const MenuAddProduct = () => {

    return (
        <div className="new__product">
            <div className="new__product__content">
                <form className="form">
                    <div>
                        <label>Product name</label>
                        <input type='text' className="form-control form__input" name="product_name" alt="product_name" placeholder="Name product"/>
                    </div>
                    <div>
                        <label>Product weight</label>
                        <input type='text' className="form-control form__input" name="product_weight" alt="weight" placeholder="Weight product"/>
                    </div>
                    <div>
                        <label>Product in stock</label>
                        <input type='text' className="form-control form__input" name="product_count" alt="count" placeholder="Product in stock"/>
                    </div>
                    <div>
                        <label>Product width</label>
                        <input type='text' className="form-control form__input" name="product_width" alt="width" placeholder="Product width"/>
                    </div>
                    <div>
                        <label>Product height</label>
                        <input type='text' className="form-control form__input" name="product_height" alt="height" placeholder="Product height"/>
                    </div>
                    <div>
                        <label>Product image</label>
                        <input type='file' className="form-control form__input" name="product_image" alt="image" placeholder="Product image"/>
                    </div>
                    <div>
                        <label>Some description</label>
                        <textarea className="form-control form__textarea" alt="description" placeholder="Write some description..."/>
                    </div>
                    <div className="form__btn">
                        <button className="submit_btn" name="Add" type="submit">Add</button>
                        <button className="cancel_btn" name="Cancel" type="reset">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MenuAddProduct;