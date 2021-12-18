export default function singleArtwork({ artwork }) {
  const pic =
    artwork.default_img.folder + '/' + artwork.default_img.compressed_file_name;
  console.log(pic);
  return (
    <div>
      {console.log(artwork.default_img.file_name)}
      <img
        src={`https://api.eden-gallery.com/artworks${pic}`}
        alt={artwork.name}
      />
      <h4>{artwork.name}</h4>
      <div>{artwork.full_size}</div>
    </div>
  );
}
