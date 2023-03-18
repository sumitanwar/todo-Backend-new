const express = require("express");
const {
  createItem,
  getAllitems,
  editItem,
  deleteSingleItem,
} = require("../controllers/itemsController");

const Router = express.Router();
Router.route("/").post(createItem).get(getAllitems);
Router.route("/:id").put(editItem).delete(deleteSingleItem);

module.exports = Router;
