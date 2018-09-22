const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bc = require("./body-controller.js");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/creatures", bc.read);
app.post("/creatures", bc.create);
app.put("/creatures/:id", bc.update);
app.delete("/creatures/:id", bc.delete);

app.listen(3005, () => {
  console.log("I am listening");
});
