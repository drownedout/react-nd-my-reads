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
		console.log(this.props);
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
            <ol className="books-grid">
              {bookItems}
            </ol>
		)
	}

}


export default BookList;