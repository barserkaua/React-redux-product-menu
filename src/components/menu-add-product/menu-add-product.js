import React from 'react';
import './menu-add-product.scss';
import {postData} from "../../services/resto-service";

const MenuAddProduct = () => {

    const bindPostData = () => {
        // Get the form tag
        const productForm = document.querySelector('form');

        // need to upload a picture file from the form

        // let photo = document.querySelector('#image-file').files[0],
        //     entry = document.querySelector('#image-file').files[0];
        // console.log(productForm);
        // console.log(photo, entry);
        // photo.src = URL.createObjectURL(entry);

        //fetch('../../upload/images' + encodeURIComponent(entry.name), {method: "PUT", body: photo});
        //alert('your file has been uploaded');

        // Add to form event "submit"
        productForm.addEventListener('submit', (e) => {
            // exclude standard browser behavior
            e.preventDefault();
            // create FormData
            const formData = new FormData(productForm);
            // transform our data in json format
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // post our data into db.json file
            postData('http://localhost:3000/menu', json)
                .then(data => {
                    console.log(data);
                    // clean the form after submitting data
                    productForm.reset();
                }).catch(() => {
               console.log('Some error')
            }).finally(() => {
                console.log('Finally');
            })
        })
    }

    const some = () => {
        bindPostData()
    }

    const checkNumInputs = () => {
        const numInputs = document.querySelectorAll('input[type="text"]');
        // check that only numbers are entered
        numInputs.forEach(item => {
            item.addEventListener('input', () => {
                // when we find not a number, we change it to empty signs
                item.value = item.value.replace(/\D/, '');
            })
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
                        <textarea className="form-control form__textarea" name="description" alt="description" placeholder="Write some description..."/>
                    </div>
                    <div className="form__btn">
                        <button onClick={some} className="submit_btn" name="Add">Add</button>
                        <button className="cancel_btn" name="Cancel" type="reset">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MenuAddProduct;