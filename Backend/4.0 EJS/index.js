import express from "express";
import ejs from "ejs";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
    const today = new Date();
    let day = today.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day == 0 || day == 6) {
        type = "the weekend";
        adv="it's time to have some fun";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
})

app.listen(port, (req, res) => {
    console.log(`Server started running on port ${port}`);
})