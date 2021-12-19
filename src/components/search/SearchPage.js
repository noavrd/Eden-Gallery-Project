import { useLocation } from 'react-router-dom';
import SingleArtwork from '../artworks/SingleArtwork';
import '../../styles/artworks.css';
import '../../styles/search.css';

import DownNav from '../downNav/DownNav';
import NavBar from '../navbar/NavBar';
import Subscribe from '../Subscribe';

export default function SearchPage() {
  const location = useLocation();
  const { results } = location.state;

  console.log(results);
  return (
    <>
      <NavBar />
      <div className="search-headline">
        <h4>{results ? results.length + ' Results' : '0 Results'}</h4>
        {results && (
          <div className="all-artworks">
            {results.map((item, i) => (
              <SingleArtwork artwork={item} key={i} />
            ))}
          </div>
        )}
        <Subscribe />
        <DownNav />
      </div>
    </>
  );
}
