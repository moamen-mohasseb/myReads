import React, { Component } from 'react';
import BookList from './BooksList'

class Read extends Component {
    render(){
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf">
                <BookList />
            
            </div>
          </div>

        )
    }
}
export default Read