import React from "react";

function Result({ title, image, link, authors, description }) {
  const handleBookSave = () => {
    const userBook = {
      title: title,
      authors: authors,
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
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <button>
        <a href={link} target="_blank" rel="noreferrer">
          View Book
        </a>
      </button>
      <button onClick={handleBookSave}>Save Book</button>
      <p>Authors: {authors}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default Result;
