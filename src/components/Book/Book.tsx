import * as React from 'react';
import './Book.css';
import Book from '../../models/Book';
import * as BooksApi from '../../BooksAPI';

interface BookProps {
    info: Book;
}

class BookComponent extends React.Component<BookProps> {
    state = {
        shelf: 'none'
    };

    onShelfChange(selectedShelf: string) {
        BooksApi
            .update(this.props.info, selectedShelf)
            .then(() => {
                this.setState({
                    shelf: selectedShelf
                });
            });
    }

    componentDidMount() {
        BooksApi.get(this.props.info.id)
            .then((mountedBook) => {
                this.setState({
                    shelf: mountedBook.shelf
                });
            });
    }

    render() {
        let { title, authors, imageLinks } = this.props.info;
        return (
            <div className="myreads-book">
            <div className="container">
                <img 
                    className="myreads-image"
                    src={imageLinks && imageLinks.thumbnail || ''}
                />
                <div className="myreads-info">
                    <div className="myreads-title">
                        {title}
                    </div>
                    <div className="myreads-authors">
                        {authors && authors.length && authors.map((author) => (
                            <p key={author}> {author} </p>
                        ))}
                    </div>
                    <div className="shelf">
                        <select value={this.state.shelf} onChange={(event) => this.onShelfChange(event.target.value)}>
                            <option value="none">Unshelved</option>
                            <option value="wantToRead">Want To Read</option>
                            <option value="currentlyReading">Reading</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default BookComponent;
