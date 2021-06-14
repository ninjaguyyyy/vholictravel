const express = require("express");
const path = require("path");
const app = express();

const homeController = require("./controllers/home.controller");

// body-parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "/public")));

app.get("/", homeController.index);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
