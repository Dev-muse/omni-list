import {createContext,useState} from 'react';
import axios from 'axios';

// initialising context
const BooksContext = createContext();
 


function Provider({children}){
  // main book state object
  const [books,setBooks] = useState([]);

  // fetching books data from database
  const fetchBooks = async ()=>{
    let response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  }


  
  const editBookById = async (id,newTitle)=>{
    let response  = await axios.put(`http://localhost:3001/books/${id}`,{
      title: newTitle
    });

     

    const updatedBooks = books.map(book=>{
       if(book.id === id){
        // overwrite change with new object 
        return {...book,...response.data}
       }
      //  unselected book id return
       return book
    })

    setBooks(updatedBooks)
  }


  const deleteBookById = async (id)=>{
    let response = await axios.delete(`http://localhost:3001/books/${id}`);

    // creates new array that doesn't include the id we deleted
    const updatedBooks = books.filter(book => book.id !== id)
    // updates state
    setBooks(updatedBooks);
  }



  const createBook = async (title)=>{

    // send post data to json server
    let response = await axios.post('http://localhost:3001/books', {
      title: title
    });
 
     // creates new instance of book state from bookCreate
     const updatedBooks = [...books, response.data];
     
     setBooks(updatedBooks);
  }
 

const valueToShare = {
  books, 
  createBook,
  deleteBookById,
  editBookById,
  fetchBooks,

}








  return (
    <BooksContext.Provider value = {valueToShare} >
        {children}
    </BooksContext.Provider>
  )
}

export {Provider};
export default BooksContext;