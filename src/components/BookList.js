import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const BookList = (props) => (
    <div>
        <link rel='stylesheet' href='/stylesheets/style.css' />
                    <tbody>
                        <tr>
                            <td>日付</td>
                            <td>メモ内容</td>
                            <td>区分</td>
                            <td>読者番号</td>
                            <td>修正</td>
                            <td>削除</td>
                        </tr>
                    </tbody>

        {props.books.map(book => {
            return (
                        <tr key={book.id}>
                            <Book {...book} />
                        </tr>
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