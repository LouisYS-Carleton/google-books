const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const Book = require("./client/src/models/Book");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/google-books",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

// Define API routes here
// app.get('/books', (req, res) => {
//   Book.find({})
//     .then((dbBook) => {
//       res.json(dbBook)
//     })
//     .catch((err) => {
//       res.status(400).json(err)
//     })
// })

app.post("/books", (req, res) => {
  console.log(req.body);
  Book.create(req.body)
    .then((userBook) => {
      res.json(userBook);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.delete("/books/:id", (req, res) => {
  const bookId = ObjectId(req.params.id);
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
