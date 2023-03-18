const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Server } = require("./src/config/Server");
require("dotenv").config({ path: "./src/config/config.env" });
const itemRouter = require("./src/routes/itemRoutes");
const Port = process.env.PORT;
Server();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1", itemRouter);
app.get("*", async (req, res, next) => {
  res.status(404).json({ Success: "Page Not Found" });
});
app.listen(Port, () => {
  console.log(`Server Connected with the Port ${Port}.`);
});
