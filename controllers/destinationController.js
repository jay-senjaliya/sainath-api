const Destination = require('./../models/Destination');

exports.getAll = async (req, res, next) => {
  try {
    const destinations = await Destination.find();

    res.status(200).json({
      message: 'success',
      total: destinations.length,
      data: destinations,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.getById = async (req, res, next) => {
  try {
    const destination = await Destination.findById(req.params.id);

    res.status(200).json({
      message: 'success',
      data: destination,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.createDestination = async (req, res) => {
  try {
    const newDestination = await Destination.create(req.body);

    res.status(201).json({
      message: 'success',
      data: newDestination,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.updateDestination = async (req, res) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedDestination) {
      return res.status(404).json({
        message: 'fail',
        error: 'No Destination found with this id!',
      });
    }
    res.status(200).json({
      message: 'success',
      data: updatedDestination,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);

    if (!destination) {
      return res.status(404).json({
        message: 'fail',
        error: 'No Destination found with this id!',
      });
    }

    res.status(204).json({
      message: 'success',
      data: destination,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};
