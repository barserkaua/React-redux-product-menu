import React from 'react';
import {CheckNumInputs} from "../menu-add-product/menu-add-product";
import {useDispatch} from "react-redux";
import {editProduct} from "../../actions";
import './menu-edit-product.scss';

const MenuEditProduct = ({item}) => {

    const {name, count, description, weight, width, height} = item;


    const editMessage = {
        success: 'Your product has been successfully added',
        failure: 'Something go wrong...'
    }

    const dispatch = useDispatch();

    function bindPostEditData() {
        // Get the form tag
        const productEditForm = document.querySelector('form');
        // Add to form event "submit"
        productEditForm.onsubmit = function (e) {
            // exclude standard browser behavior
            e.preventDefault();
            // create a new div block to show us the message with the current state
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            productEditForm.appendChild(statusMessage);
            // create FormData
            const formEditData = new FormData(productEditForm);
            // transform our data in json format
            const json = JSON.stringify(Object.fromEntries(formEditData));
            console.log(json)
            // post our data into db.json file
            //postData('http://localhost:3000/menu', json)
            //    .then(data => {
            //        // clean the form after submitting data
            //        console.log(data)
            //        productForm.reset();
            //        statusMessage.textContent = message.success;
            //    })
            //    // catch message error
            //    .catch(() => statusMessage.textContent = message.failure)
            //    .finally(() => {
            //        setTimeout(() => {
            //            // remove message
            //            statusMessage.remove();
            //        }, 3000);
            //    });
        }
    }

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
                        <button onClick={() => dispatch(editProduct())} className="submit_btn" name="Edit">Edit</button>
                        <button className="cancel_btn" name="Cancel" type="reset">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MenuEditProduct;