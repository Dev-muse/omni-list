import {useState} from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context';

const BookShow = ({book}) => {
  const [showEdit, setShowEdit] = useState(false);

  const {deleteBookById} = useBooksContext();

  const handleDeleteClick = ()=>{deleteBookById(book.id)}
  
  const handleEditClick = ()=>{
    setShowEdit(!showEdit)
  }

  const handleSubmit = ( )=>{
    
    setShowEdit(false);

    
  }
 
  let content = <h3>{book.title}</h3>

  // conditional rendering ,
  // toggle between book title & editForm depending on state
  showEdit ? content = <BookEdit onSubmit={handleSubmit}  book={book} /> : content;

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book-image" />
       <div>{content}</div>
       
       <div className="actions" >
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className='delete' onClick={handleDeleteClick}>Delete</button>
      </div>
      
    </div>
  )
}

export default BookShow;