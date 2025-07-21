import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Skeleton from '@mui/material/Skeleton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95vw', sm: 800 },
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 3,
  p: 0,
  outline: 'none',
  maxHeight: '90vh',
  overflow: 'auto'
};

export default function bookModal({ open, onClose, book }) {
  // const [detailedbook, setDetailedbookInfo] = React.useState({});
  const [imgLoaded, setImgLoaded] = React.useState(true);
  
  if (!book) return null;
  // console.log(book)

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          height: '100%',
        }}>
          {/* Imagem à esquerda */}
          <Box
            sx={{
              minWidth: { xs: '100%', sm: 300 },
              maxWidth: { xs: '100%', sm: 300 },
              height: 450, // altura fixa para imagem e skeleton
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'center',
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
              overflow: 'hidden',
              p: 0,
              m: 0,
              bgcolor: '#f5f5f5',
            }}
          >
            {imgLoaded ? (
              <Box
                component="img"
                src={book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : 'https://placehold.co/300x450?text=Sem+Capa'}
                onLoad={() => setImgLoaded(true)}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  p: 0,
                  m: 0,
                }}
              />
            ) : (
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                sx={{
                  borderRadius: 0,
                  bgcolor: '#e0e0e0',
                }}
              />
            )}
          </Box>
          {/* Conteúdo à direita */}
          <Box sx={{
            flex: 1,
            p: 4,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 0 }}>
              <CloseIcon />
            </IconButton>

            {/* Title */}
            {imgLoaded ? (
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {book.title}
              </Typography>
            ) : (
              <Skeleton variant="text" width="60%" height={40} sx={{ mb: 2 }} />
            )}

            {/* Author */}
            {imgLoaded ? (
              <Typography variant="subtitle1" sx={{ mb: 2, textDecorationLine: 'underline' }}>
                {book.author_name[0]}
              </Typography>
            ) : (
              <Skeleton variant="text" width="40%" height={28} sx={{ mb: 2 }} />
            )}

            {/* Favoritar Button */}
            {imgLoaded ? (
              <Box>
                <Button variant="outlined" startIcon={<FavoriteIcon />} sx={{ mb: 2 }}>
                  Favoritar
                </Button>
              </Box>
            ) : (
              <Skeleton variant="rectangular" width={120} height={36} sx={{ mb: 2, borderRadius: 2 }} />
            )}

            {/* Editora */}
            {imgLoaded ? (
              <Typography variant="subtitle">
                <b>Editora:</b> {book.publisher[0]}
              </Typography>
            ) : (
              <Skeleton variant="text" width="50%" height={24} sx={{ mb: 1 }} />
            )}

            {/* Ano */}
            {imgLoaded ? (
              <Typography variant="subtitle1">
                <b>Ano:</b> {book.first_publish_year}
              </Typography>
            ) : (
              <Skeleton variant="text" width="30%" height={24} sx={{ mb: 1 }} />
            )}

            {/* Páginas */}
            {imgLoaded ? (
              <Typography variant="subtitle1">
                <b>Páginas:</b> {book.number_of_pages_median ? book.number_of_pages_median : 'N/A'}
              </Typography>
            ) : (
              <Skeleton variant="text" width="30%" height={24} sx={{ mb: 1 }} />
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}