import React from 'react';
import {CheckNumInputs} from "../menu-add-product/menu-add-product";
import {useDispatch} from "react-redux";
import {editProduct} from "../../actions";
import './menu-edit-product.scss';

const MenuEditProduct = ({item}) => {

    const {name, count, description, weight, width, height} = item;

    const dispatch = useDispatch();

    return (
        <div className="edit__product">
            <div className="edit__product__content">
                <form className="form">
                    <div>
                        <label>Product name</label>
                        <input className="form-control form__input" defaultValue={name} name="name" required alt="product_name" placeholder="Name product"/>
                    </div>
                    <div>
                        <label>Product weight</label>
                        <input onInput={CheckNumInputs} type='text' className="form-control form__input" defaultValue={weight} name="weight" required alt="weight" placeholder="Weight product"/>
                    </div>
                    <div>
                        <label>Product in stock</label>
                        <input onInput={CheckNumInputs} type='text' className="form-control form__input" name="count" defaultValue={count} required alt="count" placeholder="Product in stock"/>
                    </div>
                    <div>
                        <label>Product width</label>
                        <input onInput={CheckNumInputs}  type='text' className="form-control form__input" name="width" defaultValue={width} required  placeholder="Product width"/>
                    </div>
                    <div>
                        <label>Product height</label>
                        <input onInput={CheckNumInputs} type="text" className="form-control form__input" name="height" defaultValue={height} required placeholder="Product height"/>
                    </div>
                    <div>
                        <label>Product image</label>
                        <input id="image-file" type='file' className="form-control form__input" name="imageUrl" alt="image" placeholder="Product image"/>
                    </div>
                    <div>
                        <label>Some description</label>
                        <textarea className="form-control form__textarea" defaultValue={description} name="description" required placeholder="Write some description..."/>
                    </div>
                    <div className="form__btn">
                        <button onClick={() => dispatch(editProduct(item.id))} className="submit_btn" name="Edit">Edit</button>
                        <button className="cancel_btn" name="Cancel" type="reset">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MenuEditProduct;