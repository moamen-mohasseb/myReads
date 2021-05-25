import React, { Component } from 'react';

class BooksList extends Component {
    
    render(){
        console.log(this.props.bookshelf)
        return(
            <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map( book=>{ return (
                  <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks? book.imageLinks.thumbnail:'' }}></div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div  className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>)})}
            </ol>
          </div>
        )
        }
}
export default BooksList