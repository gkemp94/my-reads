import * as React from 'react';
import * as BooksApi from '../../BooksAPI';
// import mockBooks from './mockbooks';
import Book from '../Book/Book';
import './Search.css';

interface IndustryIdentifier {
  type: string;
  identifier: string;
}

interface ReadingModes {
  text: boolean;
  image: boolean;
}

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface BookType {
  title: string;
  subtitle?: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  panelizationSummary?: PanelizationSummary;
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating?: number;
  ratingsCount?: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  id: string;
}
interface PanelizationSummary { 
  containsEpubBubbles: boolean; 
  containsImageBubbles: boolean; 
}

class Search extends React.Component {
  state = {
    query: '',
    books: []
  };

  updateQuery = (query: string) => {
    if (query.trim()) {
      BooksApi.search(query.trim())
      .then((results: BookType[] | any) => {
        if (!results.error) {
          this.setState({
            books: results,
            query: query.trim()
          });
        } else {
          this.setState({
            books: [],
            query: query.trim()
          });
        }
      });
    } else {
      this.setState({
        books: [],
        query: query.trim()
      });
    }
  }
  
  render() {
    const { books } = this.state;
    return (
      <div className="myreads-search">
        <input 
          type="text"
          className="search"
          placeholder="Search"
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        {!books.length && (
          <div>Test</div>
        )}
        <div className="myreads-results">
          {books.map((book: BookType) => (
            <Book info={book} key={book.id}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
