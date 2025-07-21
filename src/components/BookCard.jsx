import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import styles from '../styles/BookCard.module.css';
import Skeleton from '@mui/material/Skeleton';

export default function BookCard({author_name, cover_i, first_publish_year, key, title, onInfoClick}) {
  const [imgLoaded, setImgLoaded] = React.useState(false);
  console.log(cover_i)

  return (
    <Box className={styles.bookCardRow}>
      {/* Miniatura */}
      <div>
        {!imgLoaded && (
          <Skeleton
            variant="rectangular"
            width={40}
            height={58}
            className={styles.thumbnail}
          />
        )}
        <img
          src={cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-S.jpg` : 'https://placehold.co/40x58?text=Sem+Capa'}
          alt="Book Cover"
          // necessário para evitar que a imagem fique invisivel e não tenha seu elemento carregado, para que o skeleton fique o seu lugar.
          style={imgLoaded ? {} : { visibility: 'hidden' }} 
          onLoad={() => setImgLoaded(true)}
        />
      </div>
      {/* Título e autor */}
      <Box className={styles.titleArtist}>
        <Typography className={styles.title} variant="subtitle1">{title}</Typography>
        <Typography className={styles.artist} variant="body2">{!author_name ? 'N/A' : author_name}</Typography>
      </Box>
      {/* Data */}
      <Typography className={styles.date} variant="body2">{first_publish_year === 0 || !first_publish_year ? 'N/A' : first_publish_year}</Typography>
      {/* Ações */}
      <IconButton className={styles.iconBtn}>
        <FavoriteIcon fontSize="small" />
      </IconButton>
      <IconButton className={styles.iconBtn} onClick={onInfoClick}>
        <InfoIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}