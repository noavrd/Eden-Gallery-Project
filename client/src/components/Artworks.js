import SingleArtwork from './SingleArtwork';
export default function Artworks({ artworks }) {
  return (
    <div className="segments">
      <div className="page-headlines">Artworks</div>
      <span className="segment-details">
        The Galy collection blends cartoon classics with modern storytelling.
        the collection draws inspiration from Disney, Toy Story, and the
        transactional nature of contemporary society.
      </span>
      <div>
        {artworks.map((single, i) => (
          <SingleArtwork artwork={single} key={i} />
        ))}
      </div>
      <button className="explore">Explore All Artworks</button>
    </div>
  );
}
