const booksReducerDefaultState = [];

const initData = {
    data:[{message:'sample data', created:new Date()}],
    message:'please type message:',
    mode:'default',
    fdata:[]
};

export default (state = booksReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
                action.book
            ];
        case 'REMOVE_BOOK':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_BOOK':
            return state.map((book) => {
                if (book.id === action.id) {
                    return {
                        ...book,
                        ...action.updates
                    };
                } else {
                    return book;
                }
            });
        case 'GET_BOOKs':
            return action.books;
        case 'FIND':
            return action.books;
        default:
            return state;
    }
};
