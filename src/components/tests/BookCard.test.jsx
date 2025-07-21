import React from 'react';
import { render, screen } from '@testing-library/react';
import BookCard from '../BookCard';

test('renders book information correctly', () => {
    // render(<BookCard book={mockBook} />);
    render(
        <BookCard  
            title="Clean Code"
            author_name="Robert C. Martin"
            first_publish_year={2008}
            cover_i={12345}
            onInfoClick={() => {}}

        />
    );

    expect(screen.getByText('Clean Code')).toBeInTheDocument();
    expect(screen.getByText('Robert C. Martin')).toBeInTheDocument();
    expect(screen.getByText('2008')).toBeInTheDocument();
});
  