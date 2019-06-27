import React from 'react';
import styled from 'styled-components';

const BookFormList = styled.div`
    width: 400px;
    background-color: rgb(235, 232, 232);
    border-spacing: 0;
	color: rgb(25, 95, 46);
    border-radius: 6px;
    font-size: 18px;
`;

export default class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onAuthorChange = this.onAuthorChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onPublishedChange = this.onPublishedChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: props.book ? props.book.title : '',
            author: props.book ? props.book.author : '',
            description: props.book ? props.book.description : '',
            published: props.book ? props.book.published : 0,

            error: ''
        };
    }

    onTitleChange(e) {
        const title = e.target.value;
        this.setState(() => ({ title: title }));
    }

    onAuthorChange(e) {
        const author = e.target.value;
        this.setState(() => ({ author: author }));
    }

    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({ description: description }));
    }

    onPublishedChange(e) {
        const published = parseInt(e.target.value);
        this.setState(() => ({ published: published }));
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.title || !this.state.author || !this.state.published) {
            this.setState(() => ({ error: '項目を入力して下さい' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitBook(
                {
                    title: this.state.title,
                    author: this.state.author,
                    description: this.state.description,
                    published: this.state.published
                }
            );
        }
    }

    render() {
        const FONTSIZE = 25;
        return (
            <BookFormList>
                <div>
                    {this.state.error && <p className='error'>{this.state.error}</p>}
                    <form onSubmit={this.onSubmit} className='add-book-form'>
                        <textarea
                            type="text"
                            style={{ fontSize: FONTSIZE, rows: '10' }}
                            placeholder="メモ内容" autoFocus
                            value={this.state.title}
                            onChange={this.onTitleChange} />
                        <br />

                        <input
                            type="text"
                            style={{ fontSize: FONTSIZE }}
                            placeholder="区分を選んでください"
                            defaultValue="書籍"
                            value={this.state.author}
                            onChange={this.onAuthorChange} />
                        <br />

                        <input
                            placeholder="区分"
                            type="text"
                            style={{ fontSize: FONTSIZE }}
                            defaultValue="ご意見"
                            value={this.state.description}
                            onChange={this.onDescriptionChange} />
                        <br />

                        <input
                            type="text"
                            placeholder="日付"
                            defaultValue="20190621"
                            style={{ fontSize: FONTSIZE }}
                            value={this.state.published}
                            onChange={this.onPublishedChange} />
                        <br />
                        <button
                            style={{ fontSize: FONTSIZE }}
                        >登録する</button>
                    </form>
                </div>
            </BookFormList>
        );
    }
}