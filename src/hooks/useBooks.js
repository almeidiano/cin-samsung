import { useState, useEffect } from 'react';
import { fetchBooks } from '../services/openLibraryAPI';

export default function useBooks(searchTerm, page) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [booksError, setBooksError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setBooksError(false); 
    
    fetchBooks(searchTerm, page)
      .then(res => setBooks(res.docs))
      .catch(error => {
        console.log(error);
        setBooksError(true);
      })
      .finally(() => setLoading(false));
  }, [searchTerm, page]);

  return { books, loading, booksError };
}