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
		const thumbnailImage = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : '';
		return (
			<li>
	            <div className="book">
	              <div className="book-top">
	                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnailImage})`}}></div>
	                <div className="book-shelf-changer">
	                  <select onChange={(event) => this.updateShelf(event.target.value)} defaultValue="none">
	                    <option value="none" disabled>Move to...</option>
	                    <option value="currentlyReading">Currently Reading</option>
	                    <option value="wantToRead">Want to Read</option>
	                    <option value="read">Read</option>
	                    <option value="none">None</option>
	                  </select>
	                </div>
	              </div>
	              <div className="book-title">{book.title}</div>
	              <div className="book-authors">{book.authors}</div>
	            </div>
	        </li>
		)
	}

}


export default BookItem;