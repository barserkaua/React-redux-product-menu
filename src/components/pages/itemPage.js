import React, {Component} from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc/';
import Spinner from '../spinner';
import {menuLoaded, menuRequested, menuError} from '../../actions';

import './itemPage.css';

class ItemPage extends Component {

    componentDidMount() {
        if( this.props.menuItems.length === 0){
            this.props.menuRequested();

            const {RestoService} = this.props;
            // we receive data from the server
            RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(error => this.props.menuError());
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
        const{name, count, imageUrl, description, weight, size} = item;

        return (
            <div className = "item_page">
                <div className="menu__item item_block">
                    <div className="menu__name">{name}</div>
                    <img className="menu__img" src={imageUrl} alt={name}></img>
                    <div className="menu__weight">Weight: <span>{weight}g</span></div>
                    <div className="menu__count">Count: <span>{count}</span></div>
                    <p className="menu__description">description: <span>{description}</span></p>
                    <div className="menu__size">Size:
                        <span>{size.width}x{size.height} (the sizes are specified in millimeters)</span>
                    </div>
                </div>
            </div>
        );
    }
}
// with this function we get the elements that we have in reducers
const mapStateToProps =  (state) =>{
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}
// we pass action creator
const mapDispatchToProps = {
    menuLoaded: menuLoaded,
    menuRequested,
    menuError
}
// connect this function allows us to bind together the components that we substitute (MenuList) and redux
export default WithRestoService ()( connect(mapStateToProps, mapDispatchToProps)(ItemPage));