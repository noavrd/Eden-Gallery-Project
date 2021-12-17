import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import galyPhoto from './galy-hero-img.jpg';
import Inquire from './Inquire';
import Artworks from './Artworks';
import CollectionsShow from './CollectionsShow';
import Nft from './Nft';
export default function Main() {
  const [showInquire, setShowInquire] = useState(false);
  const [artist, setArtist] = useState('');
  const [artworks, setArtworks] = useState([]);

  //Get artist
  const getArtist = () => {
    fetch('DB/artists.json', {
      method: 'GET',
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
        console.log(myJson);
        setArtist(myJson);
      });
  };

  const getArtworks = () => {
    fetch('DB/artworks.json', {
      method: 'GET',
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
        console.log(myJson);
        setArtworks(myJson);
      });
  };

  useEffect(() => {
    getArtist();
    getArtworks();
  }, []);
  return (
    <div>
      <NavBar showInquire={showInquire} setShowInquire={setShowInquire} />
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
          {showInquire && <Inquire setShowInquire={setShowInquire} />}
          <img src={galyPhoto} alt="galy-pic" className="artist-picture" />
        </div>
      </div>
      <CollectionsShow />
      <Artworks artworks={artworks} />
      <Nft />
    </div>
  );
}
