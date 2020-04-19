const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const fileUpload = require('express-fileupload');

var corsOptions = {
    origin: "http://localhost/",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
app.use(cors(corsOptions));

app.use(express.static('public'));
app.use(fileUpload());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const db = require('./models');
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
  
require("./routes/user.routes")(app);
require("./routes/expense.routes")(app);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));



