import React from 'react';
import './app-header.scss';
import {Link} from "react-router-dom";

const AppHeader = () => {

    function modalWindow() {
        // Get the modal
        const modal = document.querySelector('.new__product'),
            //    // Get the button that opens the modal
            openModal = document.querySelector('.header__add__product'),
        //    // Get the element that closes the modal
            closeModal = document.querySelector('.cancel_btn');
        // When the user clicks the button, open the modal
        openModal.onclick = function(e) {
            if (e.target) {
                e.preventDefault();
            }
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
        // When the user clicks on (x), close the modal
        closeModal.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = "";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        }
    }
    return (
        <header className="header">
            <button onClick={modalWindow} className="header__add__product">
                New product
            </button>
            <Link className="header__link" to="/">
                Home
            </Link>
        </header>
    )
};

export default AppHeader;
