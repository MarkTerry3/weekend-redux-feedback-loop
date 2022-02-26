// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const PORT = process.env.PORT || 5000;
// // const submitRouter = express.Router();
// const submitRouter = require('./routes/submit-router');

// /** ---------- MIDDLEWARE ---------- **/
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('build'));

// /** ---------- EXPRESS ROUTES ---------- **/

// app.use('/submit', submitRouter);

// /** ---------- START SERVER ---------- **/
// app.listen(PORT, () => {
//     console.log('Listening on port: ', PORT);
// });


const express = require('express');
const bodyParser = require('body-parser');
const submitRouter = require('./routes/submit-router');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/submit', submitRouter);


// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
