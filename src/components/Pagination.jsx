import React from 'react';
import Pagination from '@mui/material/Pagination';

export default function CustomPagination({
  page,
  setPage,
  totalPages
}) {
  return (
    <div className="flex items-center gap-2 my-4">
      <button
        onClick={() => setPage(1)}
        disabled={page === 1}
        className={`px-3 py-1.5 rounded border border-gray-300 ${page === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-white cursor-pointer'}`}
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
        className={`px-3 py-1.5 rounded border border-gray-300 ${(page === totalPages || totalPages === 0) ? 'bg-gray-200 cursor-not-allowed' : 'bg-white cursor-pointer'}`}
      >
        Última
      </button>
    </div>
  );
}