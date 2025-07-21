import axios from 'axios';

export function fetchBooks(title) {
  return axios.get(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(title)}&limit=25&fields=title,author_name,cover_i,first_publish_year,key`,
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

export function fetchDetailedBook(title) {
  return axios.get(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(title)}&limit=1&fields=title,author_name,first_publish_year,publisher,number_of_pages_median,cover_i`,
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}