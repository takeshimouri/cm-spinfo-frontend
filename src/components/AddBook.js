import React from 'react';
import BookForm from './BookForm';
import { connect } from 'react-redux';
import { addBook } from '../actions/books';

const AddBook = (props) => (
    <div>
        <h3>新規メモを入力して下さい</h3>
        <BookForm
            onSubmitBook={(book) => {
                props.dispatch(addBook(book));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddBook);
