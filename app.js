const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { database } = require("./db.js");
const port = process.env.PORT || 3001;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.type("html").send(htmlResponse);
});

app.get("/allcats", (req, res) => {
    res.send(database);
});

app.get("/randomcat", (req, res) => {
    const randomInteger = Math.floor(Math.random() * database.cats.length);
    if (res) {
        res.status(200);
        res.type("html").send(
            `         <html>
                <h1> Name: ${database.cats[randomInteger].name}</h1>
                <h2>Species ${database.cats[randomInteger].species}</h2>
                ${database.cats[randomInteger].svg_image}
                <h2>${database.cats[randomInteger].description}</h2>
                <button onClick="window.location.reload();">Get a New Cat</button>
            </html>`
        );
    } else {
        res.status(404).send();
    }
});

app.get("/addnewcat", (req, res) => {
    res.type("html").send(`<html> ${htmlGlobalStyle}
        <head><style>
        form{
        display:flex;
        flex-direction:column;
        width:40%;
        align-items:center;
        }
        input{
        display:inline-flex;
        }
        </style></head>
        <form method="post" action="/addnewcat">
            Name<input name="name"></input> <br>
            Species<input name="species"></input> <br>
            Description<input name="description"></input> <br>
            <button type="submit">Submit</button>
        </form>
    </html>`);
});

app.post("/addnewcat", (req, res) => {
    const newCat =  req.body
    console.log("newCat", newCat);
    const addedCat = database.cats.push({
        name:newCat.name,
        species:newCat.species,
        description:newCat.description
    })
    res.send(`${htmlGlobalStyle} New cat has been added: Name: ${newCat.name},
        Species: ${newCat.species},
        Description: ${newCat.description}`)
});

app.listen(port, () => {
    `Listening on port: ${port}.`;
});
const htmlResponse = `<!DOCTYPE html>
<html>
<head>
<style>      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
        html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(32rem / 16);</style>
</head>
<body>
<section>
<h1>Welcome, try these api endpoints! </h1>
<h2>/allcats to get all the cats in the database</h2>
<h2>/randomcat to look at a random cat + a picture!</h2>
<h2>/addnewcat to enter in a new cats details and add to the database</h2>
</section>

</body>
</html>`;

const htmlGlobalStyle = `<head>
<style>      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
        html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(32rem / 16);</style>
</head>`
