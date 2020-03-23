const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyparser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
    res.status(404).send("page not found");
});

app.listen(3000);