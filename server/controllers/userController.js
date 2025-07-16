const User = require("../models/User");
const History = require("../models/History");

exports.getUsers = async (req, res) => {
  const users = await User.find().sort({ points: -1 });
  res.json(users);
};

exports.addUser = async (req, res) => {
  const { name } = req.body;
  const newUser = await User.create({ name });
  res.json(newUser);
};

exports.claimPoints = async (req, res) => {
  const { id } = req.params;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(id);
  user.points += points;
  await user.save();

  await History.create({ userId: id, claimedPoints: points });
  res.json({ user, points });
};

exports.getHistory = async (req, res) => {
  const { id } = req.params;
  const history = await History.find({ userId: id }).sort({ timestamp: -1 });
  res.json(history);
};
