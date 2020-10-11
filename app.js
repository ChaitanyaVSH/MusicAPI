const express = require("express");
const app = express();
const PORT = process.env.PORT || 5678;

console.log("Running");

app.listen(PORT, () => {
  console.log(`App is listening on the port: ${PORT}`);
});
