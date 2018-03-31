import * as React from 'react';
import * as BooksApi from '../../BooksAPI';
import './Search.css';

import BookComponent from '../Book/Book';
import Book from '../../models/Book';
import searchTerms from './searchTerms';

interface SearchState {
  books: Book[];
  query: string;
  myBooks: Book[];
}

class Search extends React.Component {
  noResultsInfo: JSX.Element;
  state: SearchState = {
    query: '',
    books: [],
    myBooks: [],
  };

  constructor(props: {}) {
    super(props);
    this.noResultsInfo = this.getNoResultInfo();
  }

  updateQuery(query: string) {
    this.setState({query: query.trim()});
    if (query.trim()) {
      BooksApi.search(query.trim())
      .then((results) => {
        if (!results.error) {
          this.setState({
            books: results
          });
        } else {
          this.setState({
            books: []
          });
        }
      });
    } else {
      this.setState({
        books: []
      });
    }
  }

  componentDidMount() {
    this.updateMyBooks();
  }

  updateMyBooks(): void {
    BooksApi.getAll()
      .then((books) => {
        this.setState({
          myBooks: books,
        });
      });
  }

  changeShelf(id: string, shelf: string): void {
    BooksApi.update({id}, shelf)
      .then((shelves) => {
        this.updateMyBooks();
      });
  }

  getRandomSearchTerm(): JSX.Element {
    const term = searchTerms[Math.floor(Math.random() * (searchTerms.length - 4))];
    return (
      <a href="#" onClick={() => this.updateQuery(term)}>{term}</a>
    );
  }

  getNoResultInfo(): JSX.Element {
    return (
      <div className="myreads-noresults">
      No results, try search for&nbsp; 
      {this.getRandomSearchTerm()},&nbsp; 
      {this.getRandomSearchTerm()}, or&nbsp; 
      {this.getRandomSearchTerm()}.
    </div>
    );
  }
  
  render() {
    const { books, query, myBooks } = this.state;
    return (
      <div className="myreads-search">
        <input 
          type="text"
          value={query}
          className="search"
          placeholder="Search"
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        {!books.length && this.noResultsInfo}
        <div className="myreads-results">
          {books.map((book: Book) => {
            let bookInMyBook = myBooks.filter((myBook) => book.id === myBook.id);
            let shelf: string = bookInMyBook.length ? bookInMyBook[0].shelf as string : 'unshelved';
            return (
              <BookComponent info={book} key={book.id} shelf={shelf} changeShelf={(id: string, value: string) => this.changeShelf(id, value)} />
            );
        })}
        </div>
      </div>
    );
  }
}

export default Search;