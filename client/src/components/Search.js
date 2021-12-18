import search from './navbar/search_icon.svg';
export default function Search() {
  return (
    <div>
      <input
        placeholder="Search anything: artwork name, collection name & articles"
        className="search-input"
      />
      <img src={search} alt="search-icon" className="search-icon-input" />
    </div>
  );
}
