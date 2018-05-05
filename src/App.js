import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import Search from './Search.js';
import './App.css';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books
        })
      })
  }

  onShelfUpdate = (book, newShelf) => {
    // Need to push book to booklist
    book.shelf = newShelf;

    let exists = false;

    const books = this.state.books.map(changedBook => {
      if(changedBook.id === book.id){
        exists = true;
        return book;
      }
      return changedBook;
    });

    if(!exists){
      this.state.books.push(book);
    }

    this.setState(this.state.books);

    BooksAPI.update(book, newShelf)
      .then(() => {
        const books = this.state.books.map(previousBook => {
          if (previousBook.id === book.id){
            previousBook.isDisabled = false;
          }
          return previousBook;
        })
        this.setState({ books })
      })
  }

  searchBooks = (query) => {
    if (query===''){
      this.setState({books:[]})
    }
    BooksAPI.search(query.trim(), 3).then(books => {
      if(books===undefined) {
        this.setState({books:[]})
      }
      this.setState({books})
    })
  }

  render() {
    // All books
    const { books } = this.state;
    return (
      <div className="app">
          <Route
            exact path="/"
            render={() =>
              <BookShelf
                books = {books}
                onShelfUpdate = {this.onShelfUpdate}
              /> }
          />
          <Route 
            exact path="/search"
            render={() => 
              <Search 
                books = {books}
                searchBooks = {this.searchBooks}
                onShelfUpdate = {this.onShelfUpdate}
              /> }
          />
      </div>
    )
  }
}

export default BooksApp
