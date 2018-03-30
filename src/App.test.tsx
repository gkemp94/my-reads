import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('Main Page',() => {
  it('Shows three categories for books', ()=> {
    
  })

  it('Allows users to move books between shelves',()=>{

  })

  it('Persists Information between browser refreshes',()=>{

  })
});

describe('Search Page',() => {
  it('Has search input that lets users search for books', ()=> {
    
  })

  it('Search results allow a user to categorize a book',()=>{

  })

  it('Selections made on the search page show up on the main page',()=>{

  })
});

describe('Routing',() => {
  it('The main page links to the search page', ()=> {
    
  })

  it('The search page links to the main page',()=>{

  })
});


