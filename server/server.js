const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/formSubmission", (req, res) => {
  console.log(req.body);
  res.json({ message: "Form data received" });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
