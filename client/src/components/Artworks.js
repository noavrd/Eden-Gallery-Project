import SingleArtwork from './SingleArtwork';
export default function Artworks({ artworks }) {
  return (
    <div>
      <h3>Artworks</h3>
      <span>
        The Galy collection blends cartoon classics with modern storytelling.
        the collection draws inspiration from Disney, Toy Story, and the
        transactional nature of contemporary society.
      </span>
      <div>
        {artworks.map((single, i) => (
          <SingleArtwork artwork={single} key={i} />
        ))}
      </div>
    </div>
  );
}
