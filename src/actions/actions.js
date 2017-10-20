// Lines Reducer Action

export const addLine = (line) => {
    return {
        type: 'ADD_LINE',
        payload: {
            line
        }
    }
}

export const deleteLine = (id) => {
    return {
        type: 'DELETE_LINE',
        payload: {
            id
        }
    }
}

export const editLine = (id, name) => {
    return {
        type: 'EDIT_LINE',
        payload: {
            id, name
        }
    }
}

// Search Reducer Action

export const searchLine = (filter) => {
    return {
        type: 'SEARCH_FILTER',
        payload: {
            filter
        }
    }
}