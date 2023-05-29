const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/processForm', (req, res) => {
  // Retrieve the form data from the request body
  const formData = req.body;

  // Access the form data
  const name = formData.name;
  const email = formData.email;
  // Access other form fields as needed

  // Perform any further processing or database operations with the form data

  // Redirect to the destination page
  res.redirect('/destination');
});

app.get('/destination', (req, res) => {
  // Render the destination HTML page
  res.sendFile(__dirname + '/destination.html');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
