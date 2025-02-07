import s from "./SearchBar.module.css";

const SearchBar = ({ getQuery, query }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.text.value;

    getQuery(value);

    // getQuery(query);
  };

  return (
    <div>
      <form className={s.wrapper} onSubmit={handleSubmit}>
        <input
          className={s.input}
          name="text"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
