import {useState} from 'react';


const BookEdit = ({book,onSubmit}) => {

  const [title, setTitle] = useState(book.title);

  const handleSubmit = (e)=>{
    e.preventDefault();
    onSubmit(book.id,title);
  
  };

  const handleChange = e=> setTitle(e.target.value);

  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label htmlFor="edit">Book Title</label>
      <input type="text" className='input' id="edit" onChange={handleChange} value={title} />
      <button className='button is-primary'>submit</button>
    </form>
  )
}

export default BookEdit