var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  // googleUser.getBasicProfile().getId()
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}



// Client ID
// 892059943609-jnh7iv9rlu3ocish1qfiamkuk6hnu3df.apps.googleusercontent.com
// Client Secret
// hh7Xz0A7pDjixy5GoA-dRQLL


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });