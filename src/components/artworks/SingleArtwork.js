export default function singleArtwork({ artwork }) {
  const pic =
    'https://api.eden-gallery.com/artworks' +
    artwork.default_img.folder +
    '/' +
    artwork.default_img.compressed_file_name;
  return (
    <div className="single-artwork">
      <div
        className="pic-artwork"
        style={{
          backgroundImage: `url(${pic}) `,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'cover',
        }}></div>

      <h4 className="artwork-name">{artwork.name}</h4>
      <div className="artwork-size">{artwork.full_size}</div>
    </div>
  );
}
