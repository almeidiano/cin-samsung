import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from '../Error';

test('renders error toast correctly', () => {    
    render(
        <Error  
            open={true}
            onClose={() => {}}
            message="Ocorreu um erro ao buscar os livros."
        />
    );

    expect(screen.getByText('Ocorreu um erro ao buscar os livros.')).toBeInTheDocument();
});
  