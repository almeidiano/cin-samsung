import { useState, React, useEffect } from 'react'
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import useBooks from './hooks/useBooks'
import Loading from './components/Loading'
import BookModal from './components/BookModal'
import { fetchDetailedBook } from './services/openLibraryAPI';
import CustomPagination from './components/Pagination';
import NotFound from './components/NotFound';
import Error from './components/Error';
import { getFavoritedBooks } from './utils/helpers';

function App() {
  // 1º. O estado da busca é atualizado através do setSearch.
  // 2º. No componente de pesquisa, (SearchBar) valor é atualizado através do hook debouncer para 
  // limitar o excesso de chamadas à API.
  // 3º. O valor retornado é enviado para o hook useBooks, no qual faz à chamada para o serviço da open library (openLibraryAPI).
  
  const [search, setSearch] = useState('');
  const [detailedBook, setDetailedBookInfo] = useState(null);

  // páginas
  const [page, setPage] = useState(1);
  const booksPerPage = 10;  
  
  // erros
  const { books, loading, booksError, setBooksError } = useBooks(search, page);
  const [detailedBookError, setDetailedBookError] = useState(false);

  // favoritos
  const [favoriteBooksLength, setFavoriteBooksLength] = useState(getFavoritedBooks().length);

  useEffect(() => {
    const handleStorage = () => {
      setFavoriteBooksLength(getFavoritedBooks().length);
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleCloseBooksError = (event, reason) => {
    if (reason === 'clickaway') return;
    setBooksError(false);
  };

  const handleCloseDetailedBook = (event, reason) => {
    if (reason === 'clickaway') return;
    setDetailedBookError(false);
  };

  // Resetar página ao mudar a busca
  useEffect(() => {
    setPage(1);
  }, [search]);  

  const handleDetailedBook = async (book) => {
    try {
      const data = await fetchDetailedBook(book.title);
      setDetailedBookInfo(data.docs[0]);
    } catch (error) {
      console.log(error)
      setDetailedBookError(true);
    }
  }

  const updateFavoriteBooksLength = () => {
    setFavoriteBooksLength(getFavoritedBooks().length);
  };

  return (
    <main className="container mx-auto my-8">
      <span className="text-gray-500 my-2">Livros Favoritados: {favoriteBooksLength}</span>
      
      <SearchBar onSearch={setSearch} placeholder="Digite para pesquisar..." />

      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className='flex flex-wrap mt-2'>
            {search ? (
              books.length > 0 ? (
                <>
                  {books.map(book => (
                    <BookCard
                      key={book.key}
                      author_name={book.author_name?.[0]}
                      cover_i={book.cover_i}
                      first_publish_year={book.first_publish_year}
                      title={book.title}
                      onInfoClick={() => handleDetailedBook(book)}
                      onFavoriteChange={updateFavoriteBooksLength}
                    />
                  ))}
                  <CustomPagination
                    page={page}
                    setPage={setPage}
                    totalPages={Math.ceil(books.length / booksPerPage)}
                  />
                </>
              ) : (
                <NotFound query={search} />
              )
            ) : (
              <div className="flex flex-col items-center justify-center w-full py-2">
                <p className="sm:text-2xl text-xl font-semibold mb-2 text-center">
                  Digite um termo para pesquisar...
                </p>
              </div>
            )}

            <BookModal
              open={!!detailedBook}
              onClose={() => {
                setDetailedBookInfo(null);
              }}
              book={detailedBook}
              onFavoriteChange={updateFavoriteBooksLength}
            />
          </div>
        )}
      </div>


      {booksError && (
        <Error
          open={booksError}
          onClose={handleCloseBooksError}
          message="Ocorreu um erro ao buscar os livros."
        />
      )}

      {detailedBookError && (
        <Error
          open={detailedBookError}
          onClose={handleCloseDetailedBook}
          message="Ocorreu um erro ao buscar os detalhes do livro."
        />
      )}

    </main>
  )
}

export default App
