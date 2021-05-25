import React, { Component } from 'react';
import BookList from './BooksList'


class ReadingState extends Component {
    

    render(){
        const readingstate= [{key:'CurrentlyReading' , name:'Currently Reading'},{key:'WantToRead' , name:'Want To Read'},{key:'Read' , name:'Read'}]
        console.log(this.props.books)
        return(
            <div className="bookshelf">
             {
             readingstate.map(bookstate =>{ return(  
                 <div key={bookstate.key} >
            <h2 className="bookshelf-title">{bookstate.name}</h2>
            <div className="bookshelf">
                <BookList books={this.props.books} bookshelf={bookstate.key}/>
            
            </div>
            </div>
             )})
    }
          </div>
        )
    }
}
export default ReadingState