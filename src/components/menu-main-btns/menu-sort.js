import React from 'react';
import './menu-sort.scss';
import {useDispatch} from 'react-redux';
import {menuSortByName, menuSortByCount} from "../../actions";

const MenuSort = () => {

    function modalWindow() {
        // Get the modal
        const modal = document.querySelector('.new__product'),
            // Get the element that closes the modal
            closeModal = document.querySelector('.cancel_btn');
        // When the user clicks the button, open the modal
        if (modal.style.display === "block") {
            modal.style.display = "none";
            document.body.style.overflow = "";
        } else {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }

        // When the user clicks on (Cancel), close the modal
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

    const dispatch = useDispatch();

    return (
        <div>
            <div className="sort__item">
                <button onClick={() => {dispatch(menuSortByName())}} className="sort__count">Sort by name</button>
                <button onClick={() => {dispatch(menuSortByCount())}} className="sort__name">Sort by count</button>
            </div>
            <div>
                <button onClick={modalWindow} className="add__product">
                    New product
                </button>
            </div>
        </div>
    )
}

export default MenuSort;
