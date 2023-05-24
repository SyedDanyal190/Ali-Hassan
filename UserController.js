const registerUser = (req, res) => {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;
  
    console.log('Received request:', req.body); // Log the entire request body
    console.log('userName:', userName); // Log the value of userName
    console.log('userEmail:', userEmail); // Log the value of userEmail
    console.log('userPassword:', userPassword); // Log the value of userPassword
  

    res.json({
      success: true,
    });
  };
  
  module.exports = registerUser;