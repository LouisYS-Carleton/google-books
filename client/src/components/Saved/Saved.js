import React, { useEffect, useState } from "react";

function Saved({ title, image, link, authors, description }) {
  const handleBookDelete = (id) => {
    fetch("/books/" + id, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        const filterResults = results.filter((currentResults) => {
          return currentResults._id !== id;
        });
        setResults(filterResults);
      }
    });
  };
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("/books")
      .then((res) => res.json(res))
      .then((data) => {
        console.log(data);
        setResults(data);
      });
  }, []);
  return (
    <div>
      {results.map((currentResults) => {
        return (
          <div>
            <h3>{currentResults.title}</h3>
            <img src={currentResults.image} alt={currentResults.title} />
            <button>
              <a href={currentResults.link} target="_blank" rel="noreferrer">
                View Book
              </a>
            </button>
            <button onClick={() => handleBookDelete(currentResults._id)}>
              Delete Book
            </button>
            <p>Authors: {currentResults.authors}</p>
            <p>Description: {currentResults.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Saved;
