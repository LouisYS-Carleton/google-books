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
          <div
            style={{
              border: "solid black thin",
              margin: "10px",
              padding: "20px",
              backgroundColor: "rgb(211 211 211)",
            }}
          >
            <h3>{currentResults.title}</h3>
            <img src={currentResults.image} alt={currentResults.title} />
            <div style={{ margin: "10px", marginLeft: "0px" }}>
              <button>
                <a href={currentResults.link} target="_blank" rel="noreferrer">
                  View Book
                </a>
              </button>
              <button onClick={() => handleBookDelete(currentResults._id)}>
                Delete Book
              </button>
            </div>
            <p>
              <h5>Authors:</h5> {currentResults.authors}
            </p>
            <p>
              <h5>Description:</h5> {currentResults.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Saved;
