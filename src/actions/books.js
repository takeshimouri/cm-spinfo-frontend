import axios from '../axios/axios';

const _addBook = (book) => ({
    type: 'ADD_BOOK',
    book
});

export const addBook = (bookData = {
    title: '',
    description: '',
    author: '',
    published: ''
}) => {
    return (dispatch) => {
        const book = {
            title: bookData.title,
            description: bookData.description,
            author: bookData.author,
            published: bookData.published
        };

        return axios.post('books/create', book).then(result => {
        // return axios.post('/cm_mdmms', book).then(result => {
            dispatch(_addBook(result.data));
        });
    };
};

const _removeBook = ({ id } = {}) => ({
    type: 'REMOVE_BOOK',
    id
});

export const removeBook = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`books/${id}`).then(() => {
        // return axios.delete(`/cm_mdmms/${id}`).then(() => {
            dispatch(_removeBook({ id }));
        })
    }
};

const _editBook = (id, updates) => ({
    type: 'EDIT_BOOK',
    id,
    updates
});

export const editBook = (id, updates) => {
    return (dispatch) => {
        return axios.put(`books/${id}`, updates).then(() => {
        // return axios.put(`/cm_mdmms/${id}`, updates).then(() => {
            dispatch(_editBook(id, updates));
        });
    }
};

const _getBooks = (books) => ({
    type: 'GET_BOOKs',
    books
});

export const getBooks = () => {
    return (dispatch) => {
        return axios.get('books/').then(result => {
        // return axios.get('/cm_mdmms').then(result => {
            const books = [];

            result.data.forEach(item => {
                books.push(item);
            });

            dispatch(_getBooks(books));
        });
    };
}





const _findMemo = ({ id } = {}) => ({
    type: 'FIND',
    id,
    books
});
    
export const findReduce = ({ id } = {}) => {
    return (dispatch) => {
        return axios.get(`books/1`).then(result => {
        // return axios.delete(`/cm_mdmms/${id}`).then(() => {
            const books = [];

            result.data.forEach(item => {
                books.push(item);
            });

            dispatch(_findMemo(id,books));
        });
    };
}
