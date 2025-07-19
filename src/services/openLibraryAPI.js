import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://covers.openlibrary.org/b/id',
//   timeout: 5000, // 5 seconds timeout
  headers: {
    'Content-Type': 'application/json'
  }
});