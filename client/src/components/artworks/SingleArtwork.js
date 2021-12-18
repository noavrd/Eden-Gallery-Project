export default function singleArtwork({ artwork }) {
  return (
    <div>
      {console.log(artwork.default_img.file_name)}
      <img
        src={`http://localhost:3000//DB/artworks/${artwork['default_img']['file_name']}`}
        alt={artwork.name}
      />
      <h4>{artwork.name}</h4>
      <div>{artwork.full_size}</div>
    </div>
  );
}
