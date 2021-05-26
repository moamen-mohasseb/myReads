import React, { Component } from 'react';
import BookList from './BooksList'
import PropTypes from 'prop-types'

class ReadingState extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onclickHandler: PropTypes.func.isRequired
      }

    render(){
        const readingstate= [{key:"currentlyReading" , name:'Currently Reading'},{key:"wantToRead" , name:'Want To Read'},{key:'read' , name:'Read'}]
         return(
            <div className="bookshelf">
             {
             readingstate.map(bookstate =>  { this.props.books.filter(boo=> boo.shelf===bookstate.key)
                return(  
                 <div key={bookstate.key} >
            <h2 className="bookshelf-title">{bookstate.name}</h2>
            <div className="bookshelf">
                <BookList books={this.props.books.filter(boo=>boo.shelf===bookstate.key)} onclickHandler={this.props.onclickHandler} />
            
            </div>
            </div>
             )})
    }
          </div>
        )
    }
}
export default ReadingState