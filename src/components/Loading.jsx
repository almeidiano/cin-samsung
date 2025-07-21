import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import styles from '../styles/Loading.module.css';

function Loading() {
  return (
    <Box className={styles.skeletonContainer}>
      {[...Array(8)].map((_, i) => (
        <Stack
          key={i}
          direction="row"
          alignItems="center"
          className={i === 3 ? styles.activeRow : styles.row}
        >
          {/* Miniatura */}
          <Skeleton variant="rectangular" width={40} height={40} className={styles.thumbnail} />

          {/* Título e artista */}
          <Box className={styles.titleArtist}>
            <Skeleton variant="text" width={"60%"} height={18} className={styles.title} />
            <Skeleton variant="text" width={"40%"} height={14} className={styles.artist} />
          </Box>

          {/* Ícone/ação */}
          <Skeleton variant="circular" width={24} height={24} className={styles.icon} />
          <Skeleton variant="circular" width={24} height={24} className={styles.icon} />
        </Stack>
      ))}
    </Box>
  );
}

export default Loading;