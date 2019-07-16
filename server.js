var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




// Client ID
// 892059943609-jnh7iv9rlu3ocish1qfiamkuk6hnu3df.apps.googleusercontent.com
// Client Secret
// hh7Xz0A7pDjixy5GoA-dRQLL


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });