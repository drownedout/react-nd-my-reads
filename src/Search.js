import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookList from './BookList';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
  constructor(props){
    super(props);
    this.searchBooks = this.searchBooks.bind(this);
    this.onShelfUpdate = this.onShelfUpdate.bind(this);
  }

  state = {
    books: []
  }

  static propTypes = {
    onShelfUpdate: PropTypes.func.isRequired
  }

  searchBooks = (query) => {
    if (query===''){
      this.setState({books:[]});
    }
    BooksAPI.search(query.trim(), 3).then(books => {
      if(books===undefined) {
        this.setState({books:[]});
      }
      this.setState({books: books});
    });
  }

  onShelfUpdate(book, newShelf){
    this.props.onShelfUpdate(book, newShelf);
  }

  render(){
    const { books } = this.state;
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.searchBooks(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookList 
              name='Search Results'
              books={books} 
              onShelfUpdate={this.onShelfUpdate}
              />
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;