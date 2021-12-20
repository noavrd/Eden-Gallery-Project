import '../../styles/artworks.css';
import SingleArtwork from './SingleArtwork';
export default function Artworks({ artworks }) {
  return (
    <div id="artworks-total">
      <div className="segments">
        <div className="page-headlines">Artworks</div>
        <span className="segment-details">
          The Galy collection blends cartoon classics with modern storytelling.
          the collection draws inspiration from Disney, Toy Story, and the
          transactional nature of contemporary society.
        </span>
      </div>
      <div className="all-artworks">
        {artworks.map((single, i) => (
          <SingleArtwork artwork={single} key={i} />
        ))}
      </div>

      <div className="explore">Explore All Artworks</div>
    </div>
  );
}
