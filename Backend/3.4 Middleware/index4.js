import express from "express";
import bodyparser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";

app.use(bodyparser.urlencoded({ extended: true }));

function bandNameGenerator(req,res,next) {
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.post("/submit", (req, res) => {
  res.send(`<h1>your Band Name is:</h1><h2>${bandName}✌️</h2>`);
})

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/public/index.html");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
