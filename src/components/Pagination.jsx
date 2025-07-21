import React from 'react';
import Pagination from '@mui/material/Pagination';

export default function CustomPagination({
  page,
  setPage,
  totalPages
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '16px 0' }}>
      <button
        onClick={() => setPage(1)}
        disabled={page === 1}
        style={{
          padding: '6px 12px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          background: page === 1 ? '#eee' : '#fff',
          cursor: page === 1 ? 'not-allowed' : 'pointer'
        }}
      >
        Primeira
      </button>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(event, value) => setPage(value)}
      />
      <button
        onClick={() => setPage(totalPages)}
        disabled={page === totalPages || totalPages === 0}
        style={{
          padding: '6px 12px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          background: page === totalPages || totalPages === 0 ? '#eee' : '#fff',
          cursor: page === totalPages || totalPages === 0 ? 'not-allowed' : 'pointer'
        }}
      >
        Última
      </button>
    </div>
  );
}