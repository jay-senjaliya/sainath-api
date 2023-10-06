const Vehicle = require('./../models/Vehicle');

exports.getAll = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();

    res.status(200).json({
      message: 'success',
      total: vehicles.length,
      data: vehicles,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);

    res.status(200).json({
      message: 'success',
      data: vehicle,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.createVehicle = async (req, res) => {
  try {
    const newVehicle = await Vehicle.create(req.body);

    res.status(201).json({
      message: 'success',
      data: newVehicle,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedVehicle) {
      return res.status(404).json({
        message: 'fail',
        error: 'No Vehicle found with this id!',
      });
    }
    res.status(200).json({
      message: 'success',
      data: updatedVehicle,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        message: 'fail',
        error: 'No Vehicle found with this id!',
      });
    }

    res.status(204).json({
      message: 'success',
      data: vehicle,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};
