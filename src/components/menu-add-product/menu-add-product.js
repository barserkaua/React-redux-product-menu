import React from 'react';
import './menu-add-product.scss';
import {postData} from "../../services/resto-service";

const MenuAddProduct = () => {

    const message = {
        success: 'Your product has been successfully added',
        failure: 'Something go wrong...'
    }

    function bindPostData() {
        // Get the form tag
        const productForm = document.querySelector('form');
        // Add to form event "submit"
        productForm.onsubmit = function (e) {
            // exclude standard browser behavior
            e.preventDefault();
            // create a new div block to show us the message with the current state
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            productForm.appendChild(statusMessage);
            // create FormData
            const formData = new FormData(productForm);
            // transform our data in json format
            const json = JSON.stringify(Object.fromEntries(formData));
            console.log(json)
            // post our data into db.json file
            postData('http://localhost:3000/menu', json)
                .then(data => {
                    // clean the form after submitting data
                    productForm.reset();
                    statusMessage.textContent = message.success;
                })
                // catch message error
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    setTimeout(() => {
                        // remove message
                        statusMessage.remove();
                    }, 3000);
                });
        }
    }

    const checkNumInputs = () => {
        const numInputs = document.querySelectorAll('input[type="text"]');
        // check that only numbers are entered
        numInputs.forEach(item => {
            // when we find not a number, we change it to empty signs
            item.value = item.value.replace(/\D/, '');
        });
    }

    return (
        <div className="new__product">
            <div className="new__product__content">
                <form className="form">
                    <div>
                        <label>Product name</label>
                        <input className="form-control form__input" name="name" alt="product_name" placeholder="Name product"/>
                    </div>
                    <div>
                        <label>Product weight</label>
                        <input onInput={checkNumInputs} type='text' className="form-control form__input" name="weight" alt="weight" placeholder="Weight product"/>
                    </div>
                    <div>
                        <label>Product in stock</label>
                        <input onInput={checkNumInputs} type='text' className="form-control form__input" name="count" alt="count" placeholder="Product in stock"/>
                    </div>
                    <div>
                        <label>Product width</label>
                        <input onInput={checkNumInputs} type='text' className="form-control form__input" name="width"  placeholder="Product width"/>
                    </div>
                    <div>
                        <label>Product height</label>
                        <input onInput={checkNumInputs} type="text" className="form-control form__input" name="height" required placeholder="Product height"/>
                    </div>
                    <div>
                        <label>Product image</label>
                        <input id="image-file" type='file' className="form-control form__input" name="imageUrl" alt="image" placeholder="Product image"/>
                    </div>
                    <div>
                        <label>Some description</label>
                        <textarea className="form-control form__textarea" name="description" placeholder="Write some description..."/>
                    </div>
                    <div className="form__btn">
                        <button onClick={bindPostData} className="submit_btn" name="Add">Add</button>
                        <button className="cancel_btn" name="Cancel" type="reset">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MenuAddProduct;