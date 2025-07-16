const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./server/routes/userRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/leaderboard");

app.use("/api", userRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));
