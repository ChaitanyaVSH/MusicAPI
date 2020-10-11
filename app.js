const express = require("express");
const app = express();
const PORT = process.env.PORT || 5678;

const genres = [
  { id: 1, genre: "Adventure" },
  { id: 2, genre: "Classical" },
  { id: 3, genre: "Pop and Jazz" },
];

/**
 * 1. Finding the object in an array based on the property
 * A. Use the find method over arrays to find an object based on the particular attributes
 *
 * 2. Please send a proper response status if the resource is not available
 * A. res.status(400)
 */

app.get("/", (req, res) => {
  res.send("Welcome to MusicWorld");
});

app.get("/api/genres", (req, res) => {
  if (genres.length === 0)
    return res.status(404).send("No items are present in the genres");

  res.send(JSON.stringify(genres));
});

app.get("/api/genres/:genre", (req, res) => {
  const genre = req.params.genre;
  const genreSong = genres.find((c) => c.genre === genre);

  if (!genreSong) {
    return res.status(404).send(`Genre ${genre} is not found`);
  }
  res.send(genre);
});

// app.post("/api/genres", (req, res) => {
//   const genreName = req.body.genre;
//   console.log(genreName);
// });

app.listen(PORT, () => {
  console.log(`App is listening on the port: ${PORT}`);
});
