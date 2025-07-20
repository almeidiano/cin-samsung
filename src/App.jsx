import { React } from 'react'
import SearchBar from './components/SearchBar';
import Skeleton from '@mui/material/Skeleton';
import { Grid } from '@mui/material';
import styles from './main.module.css';
function App() {
  return (
    <main className="container mx-auto my-8">
      <SearchBar 
        onSearch={(term) => console.log('Pesquisando:', term)}
        placeholder="Digite para pesquisar..."
      />

      <div>
        <h5 className='text-xl my-2'>Resultados da Pesquisa</h5>

        <Grid container wrap="nowrap" className={styles.bookGrid}>
          <div className={styles.bookGrid}>
            <Skeleton variant="rectangular" width={300} height={290} />
            <Skeleton variant="rectangular" width={300} height={290} />
            <Skeleton variant="rectangular" width={300} height={290} />
            <Skeleton variant="rectangular" width={300} height={290} />
          </div>
        </Grid>

      </div>
    </main>
  )
}

export default App
