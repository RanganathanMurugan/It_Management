// const express = require("express");
// require('dotenv').config();
// const bodyParser = require("body-parser"); /* deprecated */
// const cors = require("cors");

// const app = express();

// var corsOptions = {
//   origin: "*"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
// app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */
// Simple request time logger
// app.use((req, res, next) => {
//   console.log("A new request received at " + Date.now());

  // This function call tells that more processing is
  // required for the current request and is in the next middleware
//   next();  
// });
// simple route
// app.get("/", (req, res) => {
//   res.status(200).json({ status: true , message: "ITM  Rest Api" });
// });
// app.get("/status", (req, res) => {
//   res.status(200).json({ status: true , message: "ITM  Rest Api is Running" });
// });
// app.get("/sampledata", (req, res) => {
//   const resposne = [
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//       "userId": 1,
//       "id": 2,
//       "title": "qui est esse",
//       "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//       "userId": 1,
//       "id": 3,
//       "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     },
//   ]
//   res.status(200).json(resposne);
// });

// require("./app/routes.js")(app);

// set port, listen for requests
// const PORT = process.env.PORT ;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });


const express = require('express')
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const jwt = require("jsonwebtoken");

const db = require('./models');

//Following lines are to make sure our app can parse the json data


const corsOptions = {
    origin:'*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors(corsOptions));


app.post("/login", (req, res) => {
  const data = req.body;
  res.status(200).json({
     error: false,
     message: "log in successfully",
     token:"jbkjabbkjb",
     data:{
      userId: 1,
      email: "test@test.com",
      roleId: 1,
      roleName: "admin"
     }
     });
});

require("./app/routes.js")(app);

const port = process.env.PORT;
db.sequelize.sync({alter:true})
  .then((result) => {
    app.listen(port, () => {
      console.log('Server started');
    })
  })
  .catch((err) => {
    console.log(err);
  });

  