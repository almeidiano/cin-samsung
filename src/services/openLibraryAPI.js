import axios from 'axios';

export async function fetchBooks(title) {
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(title)}&limit=25&fields=title,author_name,cover_i,first_publish_year,key`,
      { headers: { 'Content-Type': 'application/json' } }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Erro ao buscar os livros');
  }
}

export async function fetchDetailedBook(title) {
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(title)}&limit=1&fields=title,author_name,first_publish_year,publisher,number_of_pages_median,cover_i`,
      { headers: { 'Content-Type': 'application/json' } }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Erro ao buscar detalhes do livro selecionado');
  }
}