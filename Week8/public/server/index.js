const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.use(express.static('public'));

app.use('/css', express.static(__dirname = '/public/css')); //http://localhost:3000/css
app.use('/css', express.static(__dirname = '/public/css')); //http://localhost:3000/css

app.listen(port, function() {
    console.log('Server started at http://localhost:%s', httpPort);
});
https
  .createServer(
    {
      key: fs.readFileSync(__dirname + '/server.key'),
      cert: fs.readFileSync(__dirname + '/server.cert'),
    },
    app
  )
  .listen(httpsPort, () => {
    console.log('Server started at http://localhost:%s', httpsPort);
  });