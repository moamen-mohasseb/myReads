import React, { Component } from 'react';
import BookList from './BooksList'

class currentlyReading extends Component {
    render(){
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf">
                <BookList />
            
            </div>
          </div>
        )
    }
}
export default currentlyReading