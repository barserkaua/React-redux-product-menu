const initialState = {
    menu: [],
    loading: true,
    error: false,
    sortByName: false,
    sortByCount: false,
    newItem: {}
}

const reducer = (state = initialState, action) => {
    // we track
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload,
                loading: false,
                error: false,
                sortByName: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true
            };
        case 'MENU_ERROR':
            return {
                ...state,
                error: true
            };
        case 'MENU_SORT_BY_NAME':
            return {
                ...state,
                sortByName: true,
                sortByCount: false
            };
        case 'MENU_SORT_BY_COUNT':
            return {
                ...state,
                sortByName: false,
                sortByCount: true
            };
        case 'MENU_ADD_NEW_PRODUCT':
            return {
                ...state,
                menu: [...state.menu, action.newItem]
            };
        default:
            return state;
    }
}

export default reducer;