const express = require(id:'express');
const app = express();
const bodyParser = require(id:'body-parser');
const port = 4000;
const cors = require(id:'cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function () {
  console.log('server up');
});
