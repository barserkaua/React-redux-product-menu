const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    };
};

const menuError = () => {
    return {
        type: 'MENU_ERROR',
    };
};

const menuSortByName = () => {
    return {
        type: 'MENU_SORT_BY_NAME',
    };
};

const menuSortByCount = () => {
    return {
        type: 'MENU_SORT_BY_COUNT',
    };
};

const menuAddNewProduct = () => {
    return {
        type: 'MENU_ADD_NEW_PRODUCT',
    };
};

export {
    menuLoaded,
    menuRequested,
    menuError,
    menuSortByName,
    menuSortByCount,
    menuAddNewProduct,
};