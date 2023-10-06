const User = require("./../models/User");

exports.getAll = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      message: "success",
      total: users.length,
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      message: "fail",
      error: error.message,
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      message: "success",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "fail",
      error: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      message: "success",
      data: newUser,
    });
  } catch (error) {
    res.status(404).json({
      message: "fail",
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({
        message: "fail",
        error: "No User found with this id!",
      });
    }
    res.status(200).json({
      message: "success",
      data: updatedUser,
    });
  } catch (error) {
    res.status(404).json({
      message: "fail",
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "fail",
        error: "No User found with this id!",
      });
    }

    res.status(204).json({
      message: "success",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "fail",
      error: error.message,
    });
  }
};
