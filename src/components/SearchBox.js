const SearchBox = ({ searchChange, searchText }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
