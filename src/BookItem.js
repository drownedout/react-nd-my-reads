import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookItem extends Component {
	updateShelf(event) {
	    this.props.onUpdateShelf(this.props.book, event);
	}
	static propTypes = {
		books: PropTypes.array.isRequired,
		updateShelf: PropTypes.func.isRequired
	}
	render() {
		const { book } = this.props;
		return (
			<li>
	            <div className="book">
	              <div className="book-top">
	                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
	                <div className="book-shelf-changer">
	                  <select onChange={(event) => this.updateShelf(event.target.value)}>
	                    <option value="none" disabled selected>Move to...</option>
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