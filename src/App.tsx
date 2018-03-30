import * as React from 'react';
import './App.css';
// import * as BooksApi from './BooksAPI';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import Bookshelf from './components/Bookshelf/Bookshelf';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route 
          exact={true}
          path="/search" 
          render={() => (
            <Search />
          )}
        />
        <Route 
          exact={true}
          path="/" 
          render={() => (
            <Bookshelf />
          )}
        />
      </div>
    );
  }
}

export default App;
