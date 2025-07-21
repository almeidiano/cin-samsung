import { useState, useEffect } from 'react';
import { fetchBooks } from '../services/openLibraryAPI';

export default function useBooks(searchTerm) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setBooks([]);
      return;
    }
    setLoading(true);
    fetchBooks(searchTerm)
      .then(res => setBooks(res.data.docs))
      .finally(() => setLoading(false));
  }, [searchTerm]);

  return { books, loading };
}