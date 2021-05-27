import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BooksList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onclickHandler: PropTypes.func.isRequired
  }
  UpdateReaingState(book,ReadingState) {
    this.props.onclickHandler(book, ReadingState)
  }
    
    render(){
       
        return(
            <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map( book=>{ 
                if(!book.shelf)
                book.shelf="none"
                  return (
                  <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail :''})` }}></div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf} onChange={(e)=>this.UpdateReaingState(book,e.target.value)}>
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