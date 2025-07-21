import axios from 'axios';

export async function fetchBooks(title, page = 1) {
  try {
    const response = await axios.get(
      // Durante o desenvolvimento, infelizmente a open library frequentemente retorna um erro 500 ao inserir um * na query da API,
      // mas isso é devidamente tratado na aplicação.
      `https://openlibrary.org/search.json?q=${title ? encodeURIComponent(title) : '*'}&limit=25&fields=title,author_name,cover_i,first_publish_year,key&page=${page}`,
      // `https://openlibrary.org/search.json?q=${encodeURIComponent(title)}&limit=25&fields=title,author_name,cover_i,first_publish_year,key`,
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