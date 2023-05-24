const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const router = require("./UserRoutes");
require('dotenv').config();

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

mongoose.connect('mongodb+srv://Danyal_789:shahgeneral1234@cluster0.mflaup4.mongodb.net/Danyal?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.log(err));
  
    
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});