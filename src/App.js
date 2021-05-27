import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ReadingState from './ReadingState'
import BookSearch from './BookSearch'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'



class BooksApp extends React.Component {
  state = {
    /**
     * 
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[]
    
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })  
    })
  }
  onclickHandler =(Book,readingState)=>
  {
    if(this.state.books){
    BooksAPI.update(Book,readingState).then(() => {
      Book.shelf = readingState;
             this.setState(state => ({
       books: state.books.filter(b => b.id !== Book.id).concat(Book)
      }))
  })}
  }
  render() {
    return (
      <div className="app">
     <Route  path='/search' render={()=> 
     <BookSearch books={this.state.books} onclickHandler={this.onclickHandler}/>}/>
     <Route exact path='/' render={()=>  <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
               <ReadingState books={this.state.books} onclickHandler={this.onclickHandler}/>
              </div>
            </div>
            <div className="open-search">
              <Link className="open-search" to='/search'>Add a book</Link>
            </div>
          </div>}/>
      </div>
    )
  }
}

export default BooksApp
