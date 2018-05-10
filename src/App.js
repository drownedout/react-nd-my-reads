import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import Search from './Search.js';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  // Retrieves all books when component mounts
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books
        })
      })
  }

  // Method to handle updates to a book's shelf
  onShelfUpdate = (book, newShelf) => {

    book.shelf = newShelf;
    let exists = false;

    BooksAPI.update(book, newShelf)
      .then(() => {
        // Checking if the updated book already exists in state
        const books = this.state.books.map(previousBook => {
          if (previousBook.id === book.id){
            exists = true;
            return book;
          }
          return previousBook;
        });
        // If it doesn't exist push to state
        if(!exists){
          this.setState(state => ({
            books: [...state.books, book]
          }))
        }
        this.setState(this.state.books);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
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
                onShelfUpdate = {this.onShelfUpdate}
              /> }
          />
      </div>
    )
  }
}

export default BooksApp
