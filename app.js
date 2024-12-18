<<<<<<< HEAD
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;
=======
require("dotenv").config();
const express = require('express');
const app = express()

const tasksRouter = require("./routes/tasks")

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON

const logger = (req, res, next) => {
   console.log(`${req.method}: Request Received On ${req.url}`);
   next();
};

app.use(logger);
console.log({ tasksRouter })
app.use(tasksRouter);

app.listen(PORT ,() => {
   console.log("SERVER IS UP AND RUNNING ON PORT NO: " + PORT);
});
