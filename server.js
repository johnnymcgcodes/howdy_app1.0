const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {PORT, mongoUri} = require('./config')
const cors = require('cors')
const morgan = require("morgan");
const bodyParser = require('body-parser')
const userRoutes = require('./routes/api/users')
// const usersRouter = require("./routes/api/users");
const path = require("path");

app.use(cors())
app.use(morgan('tiny'));
app.use(bodyParser.json());

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=> console.log("MongoDB database connected..."))
  .catch((err) => console.log(err))



app.use('/api/users', userRoutes);
app.use("/api/users/signup", userRoutes);
// app.get('/', (req, res)=> res.send('Hello planet Earth!'))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

app.listen(PORT, ()=> console.log(`App listening at http://localhost:${PORT}`))
