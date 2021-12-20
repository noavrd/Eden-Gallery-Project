export default function CollectionSingle({ single }) {
  const pic =
    'https://api.eden-gallery.com/artworks' +
    single.default_img.folder +
    '/' +
    single.default_img.compressed_file_name;
  return (
    <div className="embla__slide">
      <div>
        <div
          className="pic-collection"
          style={{
            backgroundImage: `url(${pic}) `,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'cover',
          }}></div>

        <h4 className="collection-name">{single.name}</h4>
      </div>
    </div>
  );
}
