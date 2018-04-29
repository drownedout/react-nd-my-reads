import React, { Component } from 'react';
import BookList from './BookList';
import PropTypes from 'prop-types';

class BookShelf extends Component {
	constructor(props){
		super(props)
		this.onShelfUpdate = this.onShelfUpdate.bind(this)
	}
	static propTypes = {
		books: PropTypes.array.isRequired,
		onShelfUpdate: PropTypes.func.isRequired
	}
	onShelfUpdate(book, newShelf){
		console.log(this.state)
		this.props.onShelfUpdate(book, newShelf)
	}
	render(){
		const {books, name} = this.props;
		// Currently reading
	    const current = books.filter((book) => (
	      book.shelf === 'currentlyReading'
	    ));
	    // Want to read
	    const want = books.filter((book) => (
	      book.shelf === 'wantToRead'
	    ));
	    // Have read
	    const read = books.filter((book) => (
	      book.shelf === 'read'
	    ));
		return (
			<div className="list-books">
			<div className="list-books-content">
			<div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <BookList
                  name = 'Currently Reading'
                  books={current}
                  onShelfUpdate = {this.onShelfUpdate}
                />
                <BookList
                  name = 'Want to Read'
                  books={want}
                  onShelfUpdate = {this.onShelfUpdate}
                />
                <BookList
                  name = 'Read'
                  books={read}
                  onShelfUpdate = {this.onShelfUpdate}
                />
	            </div>
           	</div>
           	</div>
           	<div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
           	</div>
		)
	}
}

export default BookShelf;