
const initialState = {
    menu: [],
    loading: true,
    error: false,
    sortByName: false,
    sortByCount: false,
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
        case 'DELETE_PRODUCT':
            // we take current id what we target
            const idx = action.payload;
            // we find the element by id
            const itemIndex = state.menu.findIndex(item => item.id === idx);

            let answer = window.confirm('Do you want to delete product?');
            if (answer === true) {
                return {
                    ...state,
                    menu: [
                        // we cut all the elements that are located before the element that we delete and after it
                        ...state.menu.slice(0, itemIndex),
                        ...state.menu.slice(itemIndex+1)
                    ]
                };
            } else {
                return {
                    ...state
                }
            }

        default:
            return state;
    }
}

export default reducer;