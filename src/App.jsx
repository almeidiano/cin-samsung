import { useState, React } from 'react'
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import Skeleton from '@mui/material/Skeleton';
import { Grid, Box, Typography } from '@mui/material';

function App() {
  // const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const data = [
    {
      src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
      title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
      channel: 'Don Diablo',
      views: '396k views',
      createdAt: 'a week ago',
    },
    {
      src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
      title: 'Queen - Greatest Hits',
      channel: 'Queen Official',
      views: '40M views',
      createdAt: '3 years ago',
    },
    {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130M views',
      createdAt: '10 months ago',
    },
  ];

  return (
    <main className="container mx-auto">
      <SearchBar 
        onSearch={(term) => console.log('Pesquisando:', term)}
        placeholder="Digite para pesquisar..."
      />

      <div>
        <h5 className='text-xl'>Resultados da Pesquisa</h5>

        <Grid container wrap="nowrap">
          {(Array.from(new Array(5))).map((item, index) => (
            <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" width={200} height={118} />
              {/* {item ? (
                <img
                  style={{ width: 210, height: 118 }}
                  alt={item.title}
                  src={item.src}
                />
              ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
              )}
              {item ? (
                <Box sx={{ pr: 2 }}>
                  <Typography gutterBottom variant="body2">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ display: 'block', color: 'text.secondary' }}
                  >
                    {item.channel}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {`${item.views} • ${item.createdAt}`}
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              )} */}
            </Box>
          ))}
        </Grid>

      </div>
    </main>
  )
}

export default App
