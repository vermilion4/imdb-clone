import React from 'react';

export default function Movies({ movies }) {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <h1>{movie.original_title}</h1>
          </div>
        );
      })}
    </div>
  );
}
