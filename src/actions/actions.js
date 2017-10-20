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

export const searchLine = (display) => {
    return {
        type: 'SEARCH_LINE',
        payload: {
            display
        }
    }
}