import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeBook } from '../actions/books';

const Book = ({ id, title, description, author, published, dispatch }) => (
    <div>
        <link rel='stylesheet' href='/stylesheets/style.css' />
                <table id="table">
                    <thead>
                        <tr>
                            <th>日付</th>
                            <th>メモ内容</th>
                            <th>区分</th>
                            <th>読者番号</th>
                            <th>修正</th>
                            <th>削除</th>
                        </tr>
                            {/* <Book {...book} /> */}
                    </thead>
                    <tbody>
        <tr>
            <td>{title}</td>
            <td>{published}</td>
            <td>{author}</td>

            {description && <td>{description}</td>}
            <td>
            <button className="btn">
            <Link to={`/book/${id}`}>
                    修正
            </Link>
            </button>
            </td>
            <td>
            <button className="btn" onClick={() => {
                dispatch(removeBook({ id }));
            }}>削除</button>
            </td>
        </tr>
        </tbody>
        </table>
    </div>
);

export default connect()(Book);