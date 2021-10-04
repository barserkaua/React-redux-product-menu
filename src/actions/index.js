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

const deleteProduct = (index) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: index
    };
};

const commentLoaded = (newComment) => {
    return {
        type: 'COMMENT_LOADED',
        payload: newComment
    };
};

const commentDelete = (index) => {
    return {
        type: 'COMMENT_DELETE',
        payload: index
    };
};

export {
    menuLoaded,
    menuRequested,
    menuError,
    menuSortByName,
    menuSortByCount,
    deleteProduct,
    commentLoaded,
    commentDelete
};