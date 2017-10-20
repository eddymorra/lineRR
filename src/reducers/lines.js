const initialState = [
    {id: '0', name: 'Faire du code'},
    {id: '1', name: 'Acheter des bananes'},
    {id: '2', name: 'Développer un CMS'},
    {id: '3', name: 'Rendez-vous à la gare pour prendre le train'},
]

const lines = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LINE':
            return [...state, action.payload.line];
        case 'DELETE_LINE':
            return state.filter(o => o.id !== action.payload.id);
        case 'EDIT_LINE':
            let index = state.findIndex(o => o.id === action.payload.id);
            let updateLine = Object.assign({}, state[index], action.payload);
            return [...state.slice(0, index), updateLine, ...state.slice(index + 1)];
        case 'SEARCH_LINE':
            return action.payload.display;
        default:
            return state;
    }
}

export default lines;