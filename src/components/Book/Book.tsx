import * as React from 'react';
import './Book.css';
import Book from '../../models/Book';

interface BookProps {
    info: Book;
    changeShelf: Function;
    shelf: string;
}

class BookComponent extends React.Component<BookProps> {

    render() {
        let { title, authors, imageLinks, id } = this.props.info;
        let { changeShelf, shelf } = this.props;
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
                        <select value={shelf} onChange={(event) => changeShelf(id, event.target.value)}>
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
