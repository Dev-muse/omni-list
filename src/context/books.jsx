import {createContext,useState} from 'react';

// initialising 
const BooksContext = createContext();
 


function Provider({children}){
  // main book state object
  const [books,setBooks] = useState([]);
  // fetching books data from database
  const fetchBooks = async ()=>{
    let response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }


 










  return (
    <BooksContext.Provider value = {{}} >
        {children}
    </BooksContext.Provider>
  )
}

export {Provider};
export default BooksContext;