import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc/';
import Spinner from '../spinner';
import {menuLoaded, menuRequested, menuError, commentLoaded} from '../../actions';
import MenuItemAddComment from "../menu-item-add-comment";
import MenuEditProduct from "../menu-edit-product";
import {modalWindow} from "../menu-main-btns/menu-sort";

import './itemPage.css';
import CommentPage from "./comment-page";

class ItemPage extends Component {

    componentDidMount() {
        const {RestoService} = this.props;
        RestoService.getCommentsItems()
            .then(res => this.props.commentLoaded(res))
            .catch(this.props.menuError())
        if( this.props.menuItems.length === 0) {
            this.props.menuRequested();
            // we receive data from the server
            RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(this.props.menuError());
        }

    }

    render() {
        if(this.props.loading) {
            return (
                <div className = "item_page">
                    <Spinner/>
                </div>
            )
        }

        // looking for the id element what we need
        const item = this.props.menuItems.find(el => +el.id === +this.props.match.params.id)
        const{name, count, imageUrl, description, weight, width, height} = item;

        // we get comments from the file db.json
        const {comments} = this.props
        // we check the comments for coincidences product id
        const itemComment = comments.map((el) => {
            if (+el.productId === +item.id)
                return el;
            })
        // get rid of undefined items
        const itemsComments = itemComment.map((comment) => {
            if (comment !== undefined) {
                return (
                    <CommentPage
                        key={comment.id}
                        comment={comment}/>
                )
            }
        })

        return (
            <div className="container">
                <div className = "item_page">
                    <div className="menu__item item_block">
                        <div className="menu__name">{name}</div>
                        <img className="menu__img" src={imageUrl} alt={name}></img>
                        <div className="menu__weight">Weight: <span>{weight}g</span></div>
                        <div className="menu__count">Count: <span>{count}</span></div>
                        <p className="menu__description">description: <span>{description}</span></p>
                        <div className="menu_bottom_line">
                            <div className="menu__size">Size:
                                <span>{width}x{height} (the sizes are specified in millimeters)</span>
                            </div>
                            <button onClick={() => modalWindow('.edit__product', '.cancel_btn')} className="edit_btn">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
                <MenuItemAddComment/>
                <ViewComment comments={itemsComments}/>
                <MenuEditProduct item={item}/>
            </div>
        );
    }
}
// with this function we get the elements that we have in reducers
const mapStateToProps =  (state) =>{
    return {
        comments: state.comments,
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,

    }
}
// we pass action creator
const mapDispatchToProps = {
    menuLoaded: menuLoaded,
    menuRequested,
    menuError,
    commentLoaded,
}

const ViewComment = ({comments}) => {
    return (
        <ul className="comment__list">
            {comments}
        </ul>
    )
}

// connect this function allows us to bind together the components that we substitute (MenuList) and redux
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));