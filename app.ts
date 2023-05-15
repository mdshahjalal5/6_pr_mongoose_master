const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    name:'shah', 
    age:20, 
  })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

