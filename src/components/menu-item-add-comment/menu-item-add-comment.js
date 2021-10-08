import React from "react";
import './menu-item-add-comment.scss'
import {useDispatch} from "react-redux";
import {commentAdd} from "../../actions";

const MenuItemAddComment = () => {

    const dispatch = useDispatch();

    return (
        <div >
            <form className="form__comment">
                <div>
                    <label className="comment__question">What you think about this product?</label>
                    <textarea className="comment__textarea" required name="descriptionComment" placeholder="Write your review of this product"/>
                </div>
                <div>
                    <button onClick={() => {dispatch(commentAdd())}} className="add_new_comment">
                        Add new comment
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MenuItemAddComment;