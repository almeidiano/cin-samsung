import axios from 'axios';

export function fetchBooks(termo) {
  return axios.get(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(termo)}&limit=25&fields=title,author_name,cover_i,first_publish_year,key`,
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}