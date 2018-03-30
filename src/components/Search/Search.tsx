import * as React from 'react';
import * as BooksApi from '../../BooksAPI';
// import mockBooks from './mockbooks';
import BookComponent from '../Book/Book';
import Book from '../../models/Book';
import './Search.css';
import searchTerms from './searchTerms';

interface SearchState {
  books: Book[];
  query: string;
}

class Search extends React.Component {
  noResultsInfo: JSX.Element;
  state: SearchState = {
    query: '',
    books: []
  };
  constructor(props: {}) {
    super(props);
    this.noResultsInfo = this.getNoResultInfo();

  }

  updateQuery = (query: string) => {
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

  getRandomSearchTerm = (): JSX.Element => {
    const term = searchTerms[Math.floor(Math.random() * (searchTerms.length - 4))];
    return (
      <a href="#" onClick={() => this.updateQuery(term)}>{term}</a>
    );
  }

  getNoResultInfo = (): JSX.Element => {
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
    const { books, query } = this.state;
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
          {books.map((book: Book) => (
            <BookComponent info={book} key={book.id}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
