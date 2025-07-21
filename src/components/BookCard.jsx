import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import styles from '../BookCard.module.css';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

export default function BookCard({author_name, cover_i, first_publish_year, key, title, onInfoClick}) {
  return (
    <Box className={styles.bookCardRow}>
      {/* Miniatura */}
      <img
        src={`https://covers.openlibrary.org/b/id/${cover_i}-S.jpg`}
        alt="Book Cover"
        className={styles.thumbnail}
      />
      {/* Título e autor */}
      <Box className={styles.titleArtist}>
        <Typography className={styles.title} variant="subtitle1">{title}</Typography>
        <Typography className={styles.artist} variant="body2">{author_name}</Typography>
      </Box>
      {/* Data */}
      <Typography className={styles.date} variant="body2">{first_publish_year === 0 ? 'N/A' : first_publish_year}</Typography>
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