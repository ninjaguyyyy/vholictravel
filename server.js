const express = require("express");
const path = require("path");
const app = express();

const homeController = require("./controllers/home.controller");
const toursController = require("./controllers/tours.controller");
const aboutUsController = require("./controllers/aboutUs.controller");

// body-parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "/public")));

app.get("/detail/:id", toursController.detail);
app.get("/", homeController.index);
app.get("/us", aboutUsController.index);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
