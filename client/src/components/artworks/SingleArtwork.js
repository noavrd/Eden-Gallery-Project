export default function singleArtwork({ artwork }) {
  const pic =
    artwork.default_img.folder + '/' + artwork.default_img.compressed_file_name;
  console.log(pic);
  return (
    <div className="single-artwork">
      {console.log(artwork.default_img.file_name)}
      <img
        src={`https://api.eden-gallery.com/artworks${pic}`}
        alt={artwork.name}
        className="pic-artwork"
      />
      <h4 className="artwork-name">{artwork.name}</h4>
      <div className="artwork-size">{artwork.full_size}</div>
    </div>
  );
}
