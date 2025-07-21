import { useState, React } from 'react'
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import useBooks from './hooks/useBooks'
import Loading from './components/Loading'
import BookModal from './components/BookModal'

function App() {
  // 1º. O estado da busca é atualizado através do setSearch.
  // 2º. No componente de pesquisa, (SearchBar) valor é atualizado através do hook debouncer para 
  // limitar o excesso de chamadas à API
  // 3º. O valor retornado é enviado para o hook useBooks, no qual faz à chamada para o serviço da open library (openLibraryAPI)

  const [search, setSearch] = useState('');
  const { books, loading } = useBooks(search);
  const [selectedBook, setSelectedBook] = useState(null);
  
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
                {books.map(book => (
                  <BookCard
                    key={book.key}
                    author_name={book.author_name?.[0]}
                    cover_i={book.cover_i}
                    first_publish_year={book.first_publish_year}
                    title={book.title}
                    onInfoClick={() => setSelectedBook(book)}
                  />
                ))}
                <BookModal
                  open={!!selectedBook}
                  onClose={() => setSelectedBook(null)}
                  book={selectedBook}
                />
              </>
            )}
          </div>
        )}
      </div>
      
    </main>
  )
}

export default App
