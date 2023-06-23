import {useState} from 'react';
import useBooksContext from '../hooks/use-books-context';


const BookCreate = () => {
  // title state
  const [title, setTitle] = useState("");

  // context data 
  const {createBook} = useBooksContext();

  const handleSubmit = (event)=>{
    event.preventDefault();
    createBook(title);
    setTitle(" ");
  }

  
  const handleChange = (event)=>setTitle(event.target.value);


  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Create a book</h3>
        <label htmlFor="bookInput">Title:</label>
        <input className="input" id="bookInput" value={title} onChange={handleChange}/>
        <button className="button">Create</button>
      </form>
    </div>
  )
}

export default BookCreate;