import React from "react";

function Result({ title, image, link, authors, description }) {
  const handleBookSave = () => {
    const userBook = {
      title: title,
      authors: authors[0],
      image: image,
      link: link,
      description: description,
    };
    fetch("/books", {
      method: "POST",
      body: JSON.stringify(userBook),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div
      style={{
        border: "solid black thin",
        margin: "10px",
        padding: "20px",
        backgroundColor: "rgb(211 211 211)",
      }}
    >
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div style={{ margin: "10px", marginLeft: "0px" }}>
        <button>
          <a href={link} target="_blank" rel="noreferrer">
            View Book
          </a>
        </button>
        <button onClick={handleBookSave}>Save Book</button>
      </div>
      <p>
        <h5>Authors:</h5> {authors}
      </p>
      <p>
        <h5>Description:</h5> {description}
      </p>
    </div>
  );
}

export default Result;
