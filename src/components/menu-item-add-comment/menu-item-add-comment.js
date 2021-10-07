import React from "react";
import './menu-item-add-comment.scss'
import {postData} from "../../services/resto-service";
import moment from "moment";

const MenuItemAddComment = () => {

    function addDate() {
        return moment().format('DD MMMM YYYY');
    }

    function bindPostComment() {
        // Get the form tag
        const commentForm = document.querySelector('form');
        // Add to form event "submit"
        commentForm.onsubmit = function (e) {
            // exclude standard browser behavior
            e.preventDefault()
            // create FormData
            const formData = new FormData(commentForm);
            // create current date
            // const newDate = {};
            // newDate.date = addDate();
            // console.log(formData)
            // console.log(newDate)

            // transform our data in json format
            let json = JSON.stringify(Object.fromEntries(formData));
            // let newJson = JSON.stringify(newDate);
            // let add = Object.assign({}, newJson, json)
            // console.log(json)
            // console.log(add)

            // post our data into db.json file
            postData('http://localhost:3000/comments', json)
                .then(data => {
                      // clean the form after submitting data
                    commentForm.reset();
                    console.log(data);
                })
                .catch()
                .finally(() => commentForm.reset())
        }
    }

    return (
        <div >
            <form className="form__comment">
                <div>
                    <label className="comment__question">What you think about this product?</label>
                    <textarea className="comment__textarea" name="descriptionComment" placeholder="Write your review of this product"/>
                </div>
                <div>
                    <button onClick={bindPostComment} className="add_new_comment">
                        Add new comment
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MenuItemAddComment;