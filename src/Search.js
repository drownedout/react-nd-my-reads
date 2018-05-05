import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';
import * as BooksAPI from './BooksAPI';

class Search extends Component {

  constructor(props){
    super(props)
    this.searchBooks = this.searchBooks.bind(this)
    this.onShelfUpdate = this.onShelfUpdate.bind(this)
  }

  state = {
    searchedBooks: [],
  }

  searchBooks = (query) => {
    if (query===''){
      this.setState({searchedBooks:[]})
    }
    BooksAPI.search(query.trim(), 3).then(books => {
      if(books===undefined) {
        this.setState({searchedBooks:[]})
      }
      this.setState({searchedBooks: books})
    })
  }

  onShelfUpdate(book, newShelf){
    this.props.onShelfUpdate(book, newShelf)
  }

  render(){
    const { searchedBooks } = this.state;
    const { books } = this.props;
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
            */}
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
              books={searchedBooks} 
              onShelfUpdate = {this.onShelfUpdate}
              />
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;