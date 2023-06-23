
import {useContext} from 'react';
import BooksContext from '../context/books';

// custom hook for using context , less import statements
function useBooksContext(){
    return useContext(BooksContext)
  }



export default useBooksContext;