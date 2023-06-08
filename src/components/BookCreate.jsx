import {useState} from 'react';


const BookCreate = ({onCreate}) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event)=>{
    event.preventDefault();
    onCreate(title);
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