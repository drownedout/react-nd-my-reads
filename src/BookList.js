import React, { Component } from 'react';
import BookItem from './BookItem';

class BookList extends Component {
	constructor(props){
		super(props)
		this.onShelfUpdate = this.onShelfUpdate.bind(this)
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
            <ol className="books-grid">
              {bookItems}
            </ol>
		)
	}

}


export default BookList;