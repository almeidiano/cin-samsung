import React, { useState } from 'react';
import { 
  InputBase, 
  IconButton, 
  Paper, 
  Box,
  alpha
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import useDebounce from '../hooks/useDebounce'
import { useEffect } from 'react'

export default function SearchBar({ onSearch, placeholder = "Pesquisar...", sx = {}}) {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 200)

  // Chama onSearch apenas quando o valor debounced muda
  useEffect(() => {
    if (onSearch) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');

    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <Box sx={{ width: '100%', ...sx }}>
      <Paper
        elevation={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 3,
          backgroundColor: (theme) => alpha(theme.palette.common.white, 0.9),
          border: '1px solid',
          borderColor: 'divider',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            elevation: 4,
            borderColor: 'primary.main',
            backgroundColor: (theme) => alpha(theme.palette.common.white, 1),
          },
          '&:focus-within': {
            elevation: 6,
            borderColor: 'primary.main',
            backgroundColor: (theme) => alpha(theme.palette.common.white, 1),
            boxShadow: (theme) => `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
          }
        }}
      >
        <IconButton
          sx={{
            p: '10px',
            color: 'text.secondary',
            '&:hover': {
              color: 'primary.main',
            }
          }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            fontSize: '1rem',
            '& .MuiInputBase-input': {
              padding: '12px 0',
              '&::placeholder': {
                opacity: 0.7,
                color: 'text.secondary',
              }
            }
          }}
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'search' }}
        />
        
        {searchTerm && (
          <IconButton
            sx={{
              p: '10px',
              color: 'text.secondary',
              '&:hover': {
                color: 'error.main',
              }
            }}
            onClick={handleClear}
            aria-label="clear search"
          >
            <ClearIcon />
          </IconButton>
        )}
      </Paper>
    </Box>
  );
}