require("dotenv").config()
const express = require("express")
const cors = require("cors")
const colors = require("colors")
const { graphqlHTTP } = require("express-graphql")
const schema = require("./graphql/schema/schema")
const connectDB = require("./config/db")

const app = express()

app.use(
  "/graphql",
  // auth,
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

//=====ConnectDatabase======
connectDB()

const PORT = 4000
app.listen(PORT, console.log(`Server Running on Port ${PORT}`.cyan.bold))