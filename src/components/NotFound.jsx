import React from 'react';

export default function NotFound({ query }) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16" style={{ minHeight: 200 }}>
      <p className="text-2xl font-semibold mb-2">Nenhum resultado encontrado para "{query}"</p>
      <p className="text-gray-500 text-base text-center max-w-md">
        Por favor, verifique se as palavras estão corretas ou use palavras diferentes.
      </p>
    </div>
  );
}