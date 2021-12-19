export default function SingleResultBar({ result }) {
  const pic =
    result.default_img.folder + '/' + result.default_img.compressed_file_name;

  return (
    <div className="single-result-bar">
      <div className="left-bar">
        <img
          src={`https://api.eden-gallery.com/artworks${pic}`}
          alt={result.name}
          className="result-artwork"
        />
      </div>
      <div className="right-bar">
        <div className="result-name">{result.name}</div>
        <div className="result-details">{result.full_size}</div>
      </div>
    </div>
  );
}
