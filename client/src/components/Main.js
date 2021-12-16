import NavBar from './NavBar';
import galyPhoto from './galy-hero-img.jpg';
export default function Main() {
  return (
    <div>
      <NavBar />
      <div className="artist-details">
        <div className="right">
          <div>
            <h1>Galy</h1>
            <h2>A digital artist for the 21st century</h2>
            <div className="about">
              Artist Galy is a self-taught prodigy in the field of 3D art.
              Reimagining familiar characters with naughty twists and bad
              habits, Galy’s art continues to evolve with his inspirations. His
              latest designs are meant to exist in his fantasy version of a dark
              cartoon universe.
            </div>
          </div>
          <div className="show-collections">View Collections</div>
        </div>
        <div className="left">
          <img src={galyPhoto} alt="galy-pic" className="artist-picture" />
        </div>
      </div>
    </div>
  );
}
