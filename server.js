var express = require('express');
var app = express();

// Serve static
app.use('/public', express.static(__dirname + '/src/public'));
app.get("*", function(req, res) {
   res.sendfile('./src/app.html')
});

// Run it
app.listen(8080, function () {
  console.log('Server is listening at http://localhost:8080');
});
