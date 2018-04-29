import React, { Component } from 'react';
import BookItem from './BookItem';
import PropTypes from 'prop-types';

class BookList extends Component {
	constructor(props){
		super(props)
		this.onShelfUpdate = this.onShelfUpdate.bind(this)
	}
	static propTypes = {
		books: PropTypes.array.isRequired,
		onShelfUpdate: PropTypes.func.isRequired
	}
	onShelfUpdate(book, newShelf){
		this.props.onShelfUpdate(book, newShelf);
	}
	render() {
		const { books } = this.props;
		let bookItems;
		if (!books) {
			bookItems = (
				<p>Nothing Here...</p>
			)
		} else {
			bookItems = books.map((book) => (
	          	<BookItem 
	          		book={book}
	          		key={book.id}
	          		onUpdateShelf={this.onShelfUpdate}
	          	/>
	        ));
		}
		return (
			<div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.name}</h2>
              <div className="bookshelf-books">
	            <ol className="books-grid">
	              {bookItems}
	            </ol>
	          </div>
            </div>
		)
	}

}

export default BookList;