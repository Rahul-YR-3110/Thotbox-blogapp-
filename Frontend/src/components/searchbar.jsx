import "..//CSS/searchbar.css"
function SearchBar({ search, setSearch, handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="Search-form">
      <input
        type="text"
        placeholder="search for Thots"
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="search-button">search</button>
    </form>
  );
}

export default SearchBar;
