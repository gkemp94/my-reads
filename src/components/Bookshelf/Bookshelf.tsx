import * as React from 'react';
import * as BooksApi from '../../BooksAPI';
import './Bookshelf.css';

import BookComponent from '../Book/Book';
import Book from '../../models/Book';

interface BookshelfState {
  books: Book[];
}

class Bookshelf extends React.Component {
  
  state: BookshelfState = {
    books: []
  };

  componentDidMount() {
    BooksApi.getAll()
      .then(books => {
        if (books.length) {
          this.setState({
            books: books
          });
        }
      });
  }

  render() {
    const { books } = this.state;
    const readBooks = books.filter((book) => book.shelf === 'read');
    const currentlyReadingBooks = books.filter((book) => book.shelf === 'currentlyReading');
    const wantToReadBooks = books.filter((book) => book.shelf === 'wantToRead');
    return (
      <div className="myreads-bookcase">
      <h3> Books You're Reading </h3>
        <div className="myreads-results">
          {currentlyReadingBooks.map((book: Book) => (
            <BookComponent info={book} key={book.id}/>
          ))}
        </div>
        <h3> Books you Want to Read </h3>
        <div className="myreads-results">
       
          {wantToReadBooks.map((book: Book) => (
            <BookComponent info={book} key={book.id}/>
          ))}
        </div>
        <h3> Books You've Read </h3>
        <div className="myreads-results">
        
          {readBooks.map((book: Book) => (
            <BookComponent info={book} key={book.id}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Bookshelf;
