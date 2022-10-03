import React, { Component } from 'react'
import MyCard from '../card';


export class Browse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3002/books')
    .then(response => response.json())
    .then(data => this.setState({books: data}))
  }

  render(){
    console.log(this.state.books)
  return(
      
      <>
      <h3>Our Book Collection:</h3>
      <div className='browse row'> 
        {this.state.books.map(book => <MyCard key={book.id} {...{id: book.id, title: book.title, image: book.image, synopsis: book.synopsis}}></MyCard>)}
        </div>
      </>
      
      )
  }
}


export default Browse
 