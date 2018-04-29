import React, { Component } from 'react';
import BookItem from './BookItem';

class BookList extends Component {
	updateShelf = (book, value) => {
		book = value
		this.setState(()=> ({

		})
	)}
	render() {
		const { books } = this.props;
		let bookItems;
		if (!books) {
			bookItems = (
				<p>Nothing Here...</p>
			)
		} else {
			bookItems = books.map((book) => (
	          	<BookItem book={book} key={book.id}/>
	        ));
		}
		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Currently Reading</h2>
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                      {bookItems}
	                    </ol>
	                  </div>
	                </div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Want to Read</h2>
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                      
	                    </ol>
	                  </div>
	                </div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Read</h2>
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                      
	                    </ol>
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


export default BookList;