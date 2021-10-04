
const initialState = {
    menu: [],
    loading: true,
    error: false,
    sortByName: false,
    sortByCount: false,
    comments: [],

}

const reducer = (state = initialState, action) => {
    // we track
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false,
                sortByName: false,

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

            let questionToDeleteProduct = window.confirm('Do you want to delete product?');
            if (questionToDeleteProduct === true) {
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
        case 'COMMENT_LOADED':
            return {
                ...state,
                comments: action.payload,
            }
        case 'COMMENT_DELETE':
            // we take current id what we target
            const idc = action.payload;
            // we find the element by id
            const commentIndex = state.comments.findIndex(item => item.id === idc);
            let questionToDeleteComment = window.confirm('Do you want to delete comment?');
            if (questionToDeleteComment === true) {
                return {
                    ...state,
                    comments: [
                        // we cut all the elements that are located before the element that we delete and after it
                        ...state.comments.slice(0, commentIndex),
                        ...state.comments.slice(commentIndex+1)
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