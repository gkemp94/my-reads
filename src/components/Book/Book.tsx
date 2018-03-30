import * as React from 'react';
import './Book.css';
import Book from '../../models/Book';
// import * as BooksApi from '../../BooksAPI';

interface BookProps {
    info: Book;
}

class BookComponent extends React.Component<BookProps> {
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
            </div>
        </div>
      </div>
    );
  }
}

export default BookComponent;
