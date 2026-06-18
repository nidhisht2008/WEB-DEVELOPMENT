import express from "express";
const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<center><h1>About Me!</h1></center> <p>Hi I am Nidhish, a full stack web developer....</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1> Contact Me</h1> <br> <ul><li>Email: nidhisht2008@gmail.com</li> <li>Ph: +91 9787672856</li></ul>");
});

app.get("")

app.listen(port, () => {
    console.log("Server has started");
});