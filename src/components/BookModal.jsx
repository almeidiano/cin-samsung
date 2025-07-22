import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Skeleton from '@mui/material/Skeleton';
import styles from '../styles/BookModal.module.css';
import { getFavoritedBooks, addFavorite, removeFavorite } from '../utils/helpers';

export default function BookModal({ open, onClose, book }) {
  const [imgLoaded, setImgLoaded] = React.useState(true);
  const [favoritedBooks, setFavoritedBooks] = useState(getFavoritedBooks());

  useEffect(() => {
    // O método storage dispara quando o localStorage é alterado.
    const syncFavorites = () => setFavoritedBooks(getFavoritedBooks());
    window.addEventListener('storage', syncFavorites);
    return () => window.removeEventListener('storage', syncFavorites);
  }, []);

  if (!book) return null;
  
  // Verifica se o livro está favoritado
  const isFavorite = favoritedBooks.includes(book.title);

  // Caso o livro seja favoritado, remove o título do array, caso contrário, adiciona o título ao array.
  // Pois cada titulo de um livro é único.
  const handleFavorite = () => {
    if (isFavorite) {
      setFavoritedBooks(removeFavorite(book.title));
    } else {
      setFavoritedBooks(addFavorite(book.title));
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={styles.modalBox}>
        <Box className={styles.modalContent}>
          {/* Imagem à esquerda */}
          <Box className={styles.coverBox}>
            {imgLoaded ? (
              <Box
                component="img"
                src={book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : 'https://placehold.co/300x450?text=Sem+Capa'}
                onLoad={() => setImgLoaded(true)}
                className={styles.coverImg}
              />
            ) : (
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                className="rounded-none bg-gray-200 w-full h-full"
              />
            )}
          </Box>
          {/* Conteúdo à direita */}
          <Box className={styles.contentBox}>
            <IconButton onClick={onClose} className={styles.closeBtn}>
              <CloseIcon />
            </IconButton>

            {/* Title */}
            {imgLoaded ? (
              <Typography variant="h5" className={styles.title}>
                {book.title}
              </Typography>
            ) : (
              <Skeleton variant="text" width="60%" height={40} className="mb-2" />
            )}

            {/* Author */}
            {imgLoaded ? (
              <Typography variant="subtitle1" className={styles.underline}>
                {book.author_name[0]}
              </Typography>
            ) : (
              <Skeleton variant="text" width="40%" height={28} className="mb-2" />
            )}

            {/* Favoritar Button */}
            {imgLoaded ? (
              <Box className="my-2">
                <Button
                  variant="outlined"
                  startIcon={
                    <FavoriteIcon className={isFavorite ? styles.favoriteColor : ''} />
                  }
                  onClick={handleFavorite}
                >
                  {isFavorite ? 'Desfavoritar' : 'Favoritar'}
                </Button>
              </Box>
            ) : (
              <Skeleton variant="rectangular" width={120} height={36} className="mb-2 rounded" />
            )}

            {/* Editora */}
            {imgLoaded ? (
              <Typography variant="subtitle">
                <b>Editora:</b> {book.publisher[0]}
              </Typography>
            ) : (
              <Skeleton variant="text" width="50%" height={24} className="mb-1" />
            )}

            {/* Ano */}
            {imgLoaded ? (
              <Typography variant="subtitle1">
                <b>Ano:</b> {book.first_publish_year}
              </Typography>
            ) : (
              <Skeleton variant="text" width="30%" height={24} className="mb-1" />
            )}

            {/* Páginas */}
            {imgLoaded ? (
              <Typography variant="subtitle1">
                <b>Páginas:</b> {book.number_of_pages_median ? book.number_of_pages_median : 'N/A'}
              </Typography>
            ) : (
              <Skeleton variant="text" width="30%" height={24} className="mb-1" />
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}