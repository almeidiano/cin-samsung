import React, { useState, useEffect } from 'react';
import { InputBase, IconButton, Paper, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import useDebounce from '../hooks/useDebounce';

export default function SearchBar({ onSearch, placeholder = "Pesquisar..." }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Delay de 500ms recomendado pela documentação técnica.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

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
    <Box className="w-full">
      <Paper
        elevation={2}
        className="!rounded-lg flex items-center rounded-xl border border-gray-300 bg-white/90 transition-all duration-200 focus-within:border-primary-500 focus-within:bg-white focus-within:shadow-md hover:border-primary-500 hover:bg-white"
      >
        <IconButton
          className="p-2 text-gray-500 hover:text-primary-500"
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          className="ml-2 flex-1 text-base placeholder:text-gray-400 placeholder:opacity-70 py-3"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'search' }}
        />
        {searchTerm && (
          <IconButton
            className="p-2 text-gray-500 hover:text-red-500"
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