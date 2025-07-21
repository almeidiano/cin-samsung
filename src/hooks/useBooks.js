import { useState, useEffect } from 'react';
import { fetchBooks } from '../services/openLibraryAPI';

export default function useBooks(searchTerm) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [booksError, setBooksError] = useState(false);

  useEffect(() => {
    // Infelizmente a open library retorna um erro 500 ao inserir um * na query da API, 
    // Por isso não é possível buscar livros sem um termo de busca.
    if (!searchTerm) {
      setBooks([]);
      return;
    }

    setLoading(true);
    setBooksError(false); 
    
    fetchBooks(searchTerm)
      .then(res => setBooks(res.docs))
      .catch(error => {
        console.log(error);
        setBooksError(true);
      })
      .finally(() => setLoading(false));
  }, [searchTerm]);

  return { books, loading, booksError };
}