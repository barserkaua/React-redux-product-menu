import {postData} from "../services/resto-service";
import moment from "moment";

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

            console.log(itemIndex)

            let questionToDeleteProduct = window.confirm('Do you want to delete product?');
            if (questionToDeleteProduct === true) {
                let newMenu = [
                        // we cut all the elements that are located before the element that we delete and after it
                        ...state.menu.slice(0, itemIndex),
                        ...state.menu.slice(itemIndex+1)
                    ]
                console.log(newMenu)
                let json = JSON.stringify(Object.fromEntries(newMenu));
                postData('http://localhost:3000/menu', json)
                    .then(data => console.log(data))
                    .catch(console.log("Error"))
                return {
                    ...state,
                    menu: newMenu
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
        case 'COMMENT_ADD':
            // Get the form tag
            const commentForm = document.querySelector('form');
            // Add to form event "submit"
            commentForm.onsubmit = function (e) {
                // exclude standard browser behavior
                e.preventDefault()
                // we get our url id
                const url = window.location.pathname;
                const idd = url.substring(url.lastIndexOf('/') + 1);

                // create FormData
                const formData = new FormData(commentForm);
                // create current date
                const newDate = {};
                newDate.date = moment().format('HH:mm DD MMMM YYYY');
                newDate.productId = +idd;

                // we receive our data in json format
                const json = JSON.stringify(Object.fromEntries(formData));
                const jsonDate = JSON.stringify(newDate);
                // then we parse them
                const parseDate = JSON.parse(jsonDate)
                const parseJsonData = JSON.parse(json)
                // we parsed our data, to combine them into one object
                const fullParseData = {...parseJsonData, ...parseDate}
                // then we again transform our data to json format
                const fullJsonData = JSON.stringify(fullParseData)

                // post our data into db.json file
                postData('http://localhost:3000/comments', fullJsonData)
                    .then(data => {
                        // clean the form after submitting data
                        commentForm.reset();
                        console.log(data);
                    })
                    .catch()
                    .finally(() => commentForm.reset())
            }
            return {
                ...state,
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