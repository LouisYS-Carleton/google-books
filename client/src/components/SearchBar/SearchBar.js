import React, { useState, useRef } from "react";
import Result from "../Result/Result";

function SearchBar() {
  //   const inputReference = useRef();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const handleBookSearch = (event) => {
    event.preventDefault();
    const apiKey = "AIzaSyCZ5Bm_AfqWpsNhTxOi7RNLyHrvdGwU17U";
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`
    )
      .then((res) => res.json(res))
      .then((data) => {
        console.log(data.items);
        setResults(data.items);
      });
  };
  return (
    <div>
      <form
        className="form-inline"
        onSubmit={(event) => handleBookSearch(event)}
      >
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            id="inputQuery"
            placeholder="Enter a keyword"
            onChange={(event) => setSearch(event.target.value)}
            style={{ marginBottom: "8px" }}
            // ref={inputReference}
          ></input>
          <button type="submit" className="btn btn-primary mb-2">
            <i className="fa fa-search">Search</i>
          </button>
        </div>
      </form>
      <div>
        {results.map((book) => (
          <Result
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : "https://placehold.it/128x211"
            }
            link={book.volumeInfo.infoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
