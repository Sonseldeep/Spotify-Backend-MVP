const express = require('express');
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/home", (req, res) => {
    res.json({
        message : "Welcome to the home page"
    });
});

app.use("/api/auth", authRoutes);




module.exports = app;