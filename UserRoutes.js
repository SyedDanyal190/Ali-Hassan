const express = require("express");
const router = express.Router();
const registerUser = require("./UserController");

router.route("/register").post(registerUser);
const Imran = require("./familyModel.js");

router.post("/register", (req, res) => {
    const { name, email, password } = req.body;
  
    // Create a new document
    const imranDocument = new Ahmeds({
      name: name,
      email: email,
      password: password,
    });
  
    // Save the document to the collection
    imranDocument
      .save()
      .then((savedDocument) => {
        console.log('Document saved:', savedDocument);
        res.json({
          success: true,
          message: "Registration successful",
          data: savedDocument
        });
      })
      .catch((error) => {
        console.log('Error saving document:', error);
        res.json({
          success: false,
          message: "Registration failed",
          error: error.message
        });
      });
  });

module.exports = router;