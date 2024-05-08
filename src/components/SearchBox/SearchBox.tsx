import Search from "@/assets/icons/search.svg?react";

const SearchBox = () => {
  return (
    <form className="search-box">
      <input type="search" placeholder="Search for anything" />
      <button type="submit" aria-label="search">
        <Search />
      </button>
    </form>
  );
};

export default SearchBox;
