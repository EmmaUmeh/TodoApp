
// CreateTodo
export const newtodo = (todoitems) => {
    return {
        type: 'TODO_ITEMS',
        payload: todoitems
    }
}


// DeleteTodo
export const deletetodo = () => {
    // localStorage.removeItem('todos');
        return {
            type: 'DELETE_ITEMS',
        }
}

// Edit Todo
export const edittodo = ( index, newValue ) => {
    // localStorage.removeItem('todos');
        return {
            type: 'EDIT_ITEMS',
            payload: { index, newValue }
        }
}