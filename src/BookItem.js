import React, { Component } from 'react';

class BookItem extends Component {
	updateShelf(event) {
	    this.props.onUpdateShelf(this.props.book, event);
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
	                    <option value="none" disabled>Move to...</option>
	                    <option value="currentlyReading">Currently Reading</option>
	                    <option value="wantToRead">Want to Read</option>
	                    <option value="read">Read</option>
	                    <option value="none">None</option>
	                  </select>
	                </div>
	              </div>
	              <div className="book-title">{book.title}</div>
	              <div className="book-authors">{book.author}</div>
	            </div>
	        </li>
		)
	}

}


export default BookItem;