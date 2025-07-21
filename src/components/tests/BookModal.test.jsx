import React from 'react';
import { render, screen } from '@testing-library/react';
import BookModal from '../BookModal';

test('renders book details information correctly', () => {
    const mockBook = {
        title: 'Deep Learning with Python',
        author_name: ['Francois Chollet'],
        first_publish_year: 2017,
        number_of_pages_median: 384,
        publisher: ['Manning Publications'],
    };
    
    render(
        <BookModal  
            open={true}
            onClose={() => {}}
            book={mockBook}
        />
    );

    expect(screen.getByText('Deep Learning with Python')).toBeInTheDocument();
    expect(screen.getByText('Francois Chollet')).toBeInTheDocument();
    expect(screen.getByText('2017')).toBeInTheDocument();
});
  