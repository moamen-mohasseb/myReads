import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BooksList from './BooksList';
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class bookSearch extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onclickHandler: PropTypes.func.isRequired
      }
    state = {
        query: '',
        booksarr:[]
      }
      
      updateQuery = (query) => {
         if(query){
        this.setState(() => ({
          query: query
        }))
        BooksAPI.search(query).then((books) => {
            if(books.length>0)
            {
            books.map(book => (this.props.books.filter((bo) => bo.id === book.id).map(b => book.shelf = b.shelf)))
            this.setState({booksarr: books})
            }else{this.setState({query: '',booksarr: []})}})}
        else{this.setState({query: '',booksarr: []})} 
}
    render(){
    if(this.state.booksarr.length>0 && this.state.query!==''){
        return(
            
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
           
                <input type="text" value={this.state.query} placeholder="Search by title or author" 
                onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                 
                  <BooksList books={this.state.booksarr} onclickHandler={this.props.onclickHandler}/>
              </ol>
              
            </div>
          </div>
            
        )}
        else {return( <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
       
            <input type="text" value={this.state.query} placeholder="Search by title or author" 
            onChange={(event) => this.updateQuery(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
             Sorry ! no results are found.....
              
          </ol>
          
        </div>
      </div>)}
    }
}
export default bookSearch