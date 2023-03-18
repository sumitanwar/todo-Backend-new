const Item = require("../models/itemModel");
exports.createItem = async (req, res, next) => {
  const item = await Item.create(req.body);
  try {
    res.status(200).json({ success: true, item });
  } catch (e) {
    res.status(401).json({ Success: false, message: e.message });
  }
};
exports.getAllitems = async (req, res, next) => {
  const items = await Item.find();
  try {
    res.status(200).json({ success: true, items });
  } catch (e) {
    res.status(403).json({ success: false, message: e.message });
  }
};
exports.editItem = async (req, res, next) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: false,
  });
  try {
    res.status(200).json({ success: true, item });
  } catch (e) {
    res.status(401).json({ success: false, message: e.message });
  }
};
exports.deleteSingleItem = async (req, res, next) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  try {
    res
      .status(200)
      .json({ success: true, message: "Item Deleted Successfully" });
  } catch (e) {
    res.status(401).json({ success: false, message: e.message });
  }
};
exports.deletManyItems = async (req, res, next) => {
  const items = await Item.deleteMany();
  try {
    res
      .status(200)
      .json({ success: true, message: "Selected Items Deleted Successfully" });
  } catch (e) {
    res.status(401).json({ success: false, message: e.message });
  }
};
