
const initialState = {
    // localstorage help stores the data
    todoitems: JSON.parse(localStorage.getItem('todos')) || [],

}


const Todoreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TODO_ITEMS':
            const updatedTodoItems = [...state.todoitems, action.payload];
            localStorage.setItem('todos', JSON.stringify(updatedTodoItems));
            return {
                ...state,
                todoitems: updatedTodoItems, 
            };

            case 'DELETE_ITEMS':
                const updatedItems = [...state.todoitems];
                updatedItems.splice(action.payload, 1); // Remove the item at the specified index
                localStorage.setItem('todos', JSON.stringify(updatedItems));
                return {
                    ...state,
                    todoitems: updatedItems,
                };

                case 'EDIT_ITEMS':
                    const { index, newValue } = action.payload; // Destructure index and newValue
                    const updatedItemsAfterEdit = [...state.todoitems];
                    updatedItemsAfterEdit[index] = newValue;
                    localStorage.setItem('todos', JSON.stringify(updatedItemsAfterEdit));
                    return {
                        ...state,
                        todoitems: updatedItemsAfterEdit,
                    };
        // set default state
        default:
            return state;
    }
};

export default Todoreducer;
