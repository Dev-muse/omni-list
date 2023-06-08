import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  // main boook state object
  const [books,setBooks] = useState([]);
  

  const editBookById = (id,newTitle)=>{

    const updatedBooks = books.map(book=>{
       if(book.id === id){
        // overwrite change with new object 
        return {...book,title: newTitle}
       }
      //  unselected book id return
       return book
    })

    setBooks(updatedBooks)
  }


  const deleteBookById = (id)=>{

    // creates new array that doesn't include the id we deleted
    const updatedBooks = books.filter(book => book.id !== id)
    // updates state
    setBooks(updatedBooks);
  }


  const createBook = (title) =>{

    // creates new instance of book state from bookCreate
    const updatedBooks = 
    [...books, {id:Math.round(Math.random()*9999), title}];
    
    setBooks(updatedBooks);
  }

  return (
  <div className='app'>
    <h1>Reading List</h1>
    <BookList onEdit={editBookById} books= {books}  onDelete={deleteBookById}/>
    <BookCreate onCreate={createBook}/>
  </div>
  )
}

export default App;
