import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const BookList = (props) => (
    <div>
        <link rel='stylesheet' href='/stylesheets/style.css' />
                            {/* <Book {...book} /> */}
        {props.books.map(book => {
            return (
                    <tbody>
                        <tr key={book.id}>
                            <Book {...book} />
                        </tr>
                    </tbody>
            );
        })}

    </div>
);

const mapStateToProps = (state) => {
    return {
        books: state
    };
}

export default connect(mapStateToProps)(BookList);