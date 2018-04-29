import React, { Component } from 'react';
import BookList from './BookList';

class BookShelf extends Component {
	constructor(props){
		super(props)
		this.onShelfUpdate = this.onShelfUpdate.bind(this)
	}
	onShelfUpdate(book, newShelf){
		console.log(this.state)
		this.props.onShelfUpdate(book, newShelf)
	}
	render(){
		const {books, name} = this.props;
		return (
			<div className="bookshelf">
              <h2 className="bookshelf-title">{name}</h2>
              <div className="bookshelf-books">
              	<BookList 
              		books={books} 
              		onShelfUpdate={this.onShelfUpdate}
              	/>
              </div>
            </div>
		)
	}
}

export default BookShelf;