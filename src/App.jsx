import { useState, React } from 'react'
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
// import { Grid, Typography, Card, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import useBooks from './hooks/useBooks'
import SkeletonList from './components/SkeletonList'

function App() {
  const [search, setSearch] = useState('');
  const { books, loading } = useBooks(search);

  return (
    <main className="container mx-auto my-8">
      <SearchBar onSearch={setSearch} placeholder="Digite para pesquisar..." />

      <div>
        {loading ? (
          <SkeletonList />
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            {loading ? (
              <SkeletonList />
            ) : (
              <>
                {books.slice(0, 10).map(book => (
                  <BookCard
                    key={book.key}
                    author_name={book.author_name?.[0]}
                    cover_i={book.cover_i}
                    first_publish_year={book.first_publish_year}
                    title={book.title}
                  />
                ))}
              </>
            )}
          </div>
        )}
      </div>
      
    </main>
  )
}

export default App
