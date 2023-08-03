import React from 'react';

function SearchResults({ results }) {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            {result.name} - ${result.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
