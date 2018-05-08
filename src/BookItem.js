import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookItem extends Component {
	updateShelf(event) {
	    this.props.onUpdateShelf(this.props.book, event);
	}
	static propTypes = {
		book: PropTypes.object.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
	}
	render() {
		const { book } = this.props;
		const authors = book.authors ? book.authors.map((author) => 
				<div className="book-authors" key={author}>
					{author}
				</div>
				)
			: '';

		const thumbnailImage = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : '';
		const shelf = book.shelf ? book.shelf : 'none';
		return (
			<li>
	            <div className="book">
	              <div className="book-top">
	                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnailImage})`}}></div>
	                <div className="book-shelf-changer">
	                  <select onChange={(event) => this.updateShelf(event.target.value)} value={shelf}>
	                    <option value="" disabled>Move to...</option>
	                    <option value="currentlyReading">Currently Reading</option>
	                    <option value="wantToRead">Want to Read</option>
	                    <option value="read">Read</option>
	                    <option value="none">None</option>
	                  </select>
	                </div>
	              </div>
	              <div className="book-title">{book.title}</div>
	              {authors}
	            </div>
	        </li>
		)
	}

}


export default BookItem;