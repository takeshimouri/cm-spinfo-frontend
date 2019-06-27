import React from 'react';
import BookForm from './BookForm';
import { connect } from 'react-redux';
import { addBook } from '../actions/books';
import styled from 'styled-components';

const AddBookList = styled.div`
    background-color: #red;
    color: #red;
    width: 400px;
    background-color: rgb(235, 232, 232);
    border: 2px solid #aaa;
    border-collapse: separate;
    border-spacing: 0;
	color: rgb(25, 95, 46);
    border-radius: 6px;
    font-size: 18px;
    float: left;
`;

const AddBook = (props) => (
    <AddBookList>
        <div>
            <h3>新規メモを入力して下さい</h3>
            <BookForm
                onSubmitBook={(book) => {
                    props.dispatch(addBook(book));
                    props.history.push('/');
                }}
            />
            <br></br>
        </div>
    </AddBookList>
);

export default connect()(AddBook);
