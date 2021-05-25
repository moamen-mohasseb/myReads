import React, { Component } from 'react';
import BookList from './BooksList'

class wantToRead extends Component {
    render(){
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf">
                <BookList />
            
            </div>
          </div>
        )
    }
}
export default wantToRead