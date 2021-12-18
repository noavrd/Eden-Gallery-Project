import { useState } from 'react';
import '../styles/search.css';
import search from './navbar/search_icon.svg';
export default function Search() {
  const [results, setResults] = useState([]);

  const searchFromInput = (value) => {};
  return (
    <div className="search-total">
      <input
        placeholder="Search anything: artwork name, collection name & articles"
        className="search-input"
        onChange={(event) => searchFromInput(event.target.value)}
      />
      <img src={search} alt="search-icon" className="search-icon-input" />
    </div>
  );
}

// $regex: searchText.toLowerCase(), $options: "i"
