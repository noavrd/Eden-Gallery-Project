import { useState } from 'react';
import '../../styles/search.css';
import search from '../navbar/search_icon.svg';
import SingleResultBar from './SingleResultBar';
import close from '../icon-close.svg';
import { Link } from 'react-router-dom';
export default function Search({ setSearch, mobile }) {
  const [results, setResults] = useState([]);
  console.log(mobile);
  const getResultsFromInput = async (value) => {
    setResults([]);
    if (value.length < 3) {
      return;
    }
    await fetch(`https://api.eden-gallery.com/artworks?query=${value}`, {
      method: 'GET',
      // mode: 'no-cors',
      headers: {
        Authorization: 'deWcjOgQPiR6PVzUWqJLfYcBlljUjIVELOmiMStOXBCFodCQGq',
        Pass: 'PNUt5uF4Kp4qEvGg8gCO3EtLJ7km2EMkiIVRmgmGzNb1LfYAi7',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        setResults(myJson);
      });
  };
  if (results === []) {
    return (
      <div
        className={`${mobile === 'mobile' ? 'mobile-search' : 'search-total'}`}>
        <input
          placeholder="Search anything: artwork name, collection name & articles"
          className="search-input"
          onChange={(event) => getResultsFromInput(event.target.value)}
        />
        <img src={search} alt="search-icon" className="search-icon-input" />
      </div>
    );
  } else {
    return (
      <div
        className={`${mobile === 'mobile' ? 'mobile-search' : 'search-total'}`}>
        <input
          placeholder="Search anything: artwork name, collection name & articles"
          className="search-input"
          onChange={(event) => getResultsFromInput(event.target.value)}
        />
        <Link to={'/search'} state={{ results: results }}>
          <img src={search} alt="search-icon" className="search-icon-input" />
        </Link>
        {results.length > 0 && (
          <div className="search-results">
            <div className="result-bar">
              <img
                className="exit-search"
                src={close}
                alt="close"
                onClick={() => setSearch(false)}
              />
              {results.map((item, i) => (
                <SingleResultBar result={item} key={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
