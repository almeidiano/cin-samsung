import { useState, React } from 'react'
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import useBooks from './hooks/useBooks'
import Loading from './components/Loading'
import BookModal from './components/BookModal'
import { fetchDetailedBook } from './services/openLibraryAPI';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Pagination from '@mui/material/Pagination';

function App() {
  // 1º. O estado da busca é atualizado através do setSearch.
  // 2º. No componente de pesquisa, (SearchBar) valor é atualizado através do hook debouncer para 
  // limitar o excesso de chamadas à API.
  // 3º. O valor retornado é enviado para o hook useBooks, no qual faz à chamada para o serviço da open library (openLibraryAPI).

  const [search, setSearch] = useState('');
  const [detailedBook, setDetailedBookInfo] = useState(null);
  const [detailedBookError, setDetailedBookError] = useState(false);
  const { books, loading, booksError } = useBooks(search);
  const [page, setPage] = useState(1);
  const booksPerPage = 10;
  const paginatedBooks = books.slice((page - 1) * booksPerPage, page * booksPerPage);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setDetailedBookError(false); 
  };

  const handleDetailedBook = async (book) => {
    try {
      const data = await fetchDetailedBook(book.title);
      setDetailedBookInfo(data.docs[0]);
    } catch (error) {
      console.log(error)
      setDetailedBookError(true);
    }
  }

  return (
    <main className="container mx-auto my-8">
      <SearchBar onSearch={setSearch} placeholder="Digite para pesquisar..." />

      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className='flex flex-wrap mt-2'>
            {loading ? (
              <Loading />
            ) : (
              <>
                {paginatedBooks.map(book => (
                  <BookCard
                    key={book.key}
                    author_name={book.author_name?.[0]}
                    cover_i={book.cover_i}
                    first_publish_year={book.first_publish_year}
                    title={book.title}
                    onInfoClick={() => handleDetailedBook(book)}
                  />
                ))}
                <Pagination
                  count={Math.ceil(books.length / booksPerPage)}
                  page={page}
                  onChange={(event, value) => setPage(value)}
                />
                <BookModal
                  open={!!detailedBook}
                  onClose={() => {
                    setDetailedBookInfo(null);
                  }}
                  book={detailedBook}
                />
              </>
            )}
          </div>
        )}
      </div>
      
      {detailedBookError && <>
        <Snackbar open={detailedBookError} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Ocorreu um erro ao buscar os detalhes do livro.
        </Alert>
      </Snackbar>
      </>}
      {booksError && <>
        <Snackbar open={booksError} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Ocorreu um erro ao buscar os livros.
        </Alert>
      </Snackbar>
      </>}
    </main>
  )
}

export default App
