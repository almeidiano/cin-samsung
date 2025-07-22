import BookCard from './BookCard'
import React from 'react';

export default {
  title: 'Components/BookCard',
  component: BookCard,
  argTypes: {
    title: { control: 'text' },
    author_name: { control: 'text' },
    first_publish_year: { control: 'number' },
    cover_i: { control: 'number' },
    onInfoClick: { action: 'info clicked' }
  }
};

const Template = (args) => <BookCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'The Pragmatic Programmer',
  author_name: 'David Thomas, Andrew Hunt',
  first_publish_year: 1999,
  cover_i: 123456
};

export const WithoutCover = Template.bind({});
WithoutCover.args = {
  title: 'Book Without Cover',
  author_name: 'Unknown Author',
  first_publish_year: 2020,
  cover_i: null
};

export const NoAuthor = Template.bind({});
NoAuthor.args = {
  title: 'Book Without Author',
  author_name: '',
  first_publish_year: 2021,
  cover_i: 654321
};