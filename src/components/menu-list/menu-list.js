import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from "../hoc";
import {menuLoaded, menuRequested, menuError, menuSortByName, menuSortByCount} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;

        // we receive data from the server
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(error => this.props.menuError());
    }

    render() {

        const {menuItems, loading, error, sortByName, sortByCount} = this.props;
        // check if our page still loading
        if (loading) {
            return <Spinner/>
        }
        // check if we have some error on page
        if (error) {
            return <Error/>
        }
        // if sortByCount = true, we sort our items by count
        if (sortByCount){
            menuItems.sort(function (firstItem, secondItem) {
                return firstItem.count - secondItem.count
            })
        }
        // if sortByCount = true, we sort our items by name
        if (sortByName){
            menuItems.sort(function (firstItem, secondItem) {
                const first = firstItem.name.toUpperCase(); // ignore upper and lowercase
                const second = secondItem.name.toUpperCase(); // ignore upper and lowercase

                if (first < second) {
                    return -1;
                }
                if (first > second) {
                    return 1;
                }
                // names must be equal
                return 0;
            })
        }
        // we call the passed function once for each element of the array, forming a new array from the results of calling this function
        const items = menuItems.map((menuItem) => {
            return (
                <MenuListItem
                    key = {menuItem.id}
                    menuItem = {menuItem}/>
            )
        })
        return (
            <View items = {items}/>
        )
    }
};

// with this function we get the elements that we have in reducers
const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
        sortByName: state.sortByName,
        sortByCount: state.sortByCount
    }
}
// we pass action creator
const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    menuSortByName,
    menuSortByCount
};

const View = ({items}) => {
    return (
        <ul className="menu__list">
            {items}
        </ul>
    )
}

// connect this function allows us to bind together the components that we substitute (MenuList) and redux
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));