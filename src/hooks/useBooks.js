import { useState, useEffect } from 'react';
import { fetchBooks } from '../services/openLibraryAPI';

export default function useBooks(searchTerm) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [booksError, setBooksError] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setBooks([]);
      return;
    }
    setLoading(true);
    try {
      fetchBooks(searchTerm)
      .then(res => {setBooks(res.docs)})
      .finally(() => setLoading(false));
    } catch (error) {
      console.log(error)
      setBooksError(true);
    }
  }, [searchTerm]);

  return { books, loading, booksError };
}