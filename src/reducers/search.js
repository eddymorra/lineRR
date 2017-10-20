const initialState = '';

const search = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_FILTER':
            return action.payload.filter;
        default:
            return state;
    }
}

export default search;