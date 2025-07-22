// LOCALSTORAGE

// Retorna o array de títulos favoritados
export function getFavoritedBooks() {
    const stored = localStorage.getItem('favoritedBooks');
    return stored ? JSON.parse(stored) : [];
  }
  
  // Se não estiver disponível, adiciona um título aos favoritos.
  export function addFavorite(title) {
    const books = getFavoritedBooks();
    
    if (!books.includes(title)) {
      const updated = [...books, title];
      localStorage.setItem('favoritedBooks', JSON.stringify(updated));
      return updated;
    }

    return books;
  }
  
  // Remove um título dos favoritos, mas mantém a chave no localStorage
  export function removeFavorite(title) {
    const books = getFavoritedBooks();
    const updated = books.filter(t => t !== title);
    localStorage.setItem('favoritedBooks', JSON.stringify(updated));

    return updated;
  }
  
  // Alterna o favorito: se já está, remove; se não está, adiciona
  export function toggleFavorite(title) {
    const books = getFavoritedBooks();
    let updated;

    if (books.includes(title)) {
      updated = books.filter(t => t !== title);
    } else {
      updated = [...books, title];
    }

    localStorage.setItem('favoritedBooks', JSON.stringify(updated));
    return updated;
  }