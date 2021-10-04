import React from 'react';
import './itemPage.css';
import {useDispatch} from "react-redux";
import {commentDelete} from "../../actions";

const CommentPage = ({comment}) => {
    const {id, descriptionComment, date} = comment;

    const dispatch = useDispatch();

    return (
        <li className="comment">
            <div className="comment_page">
                <div className="comment_item">
                    <div className="comment_desc">
                        {descriptionComment}
                    </div>
                    <div className="bottom_block">
                        <div className="date_publish">
                            {date}
                        </div>
                        <button
                            type="submit"
                            className="comment_btn_delete"
                            onClick={() => dispatch(commentDelete(id))
                            }>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CommentPage;