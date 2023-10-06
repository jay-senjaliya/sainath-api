const FixedDeparture = require('./../models/FixedDeparture');

exports.getAll = async (req, res) => {
  try {
    const fixedDepartures = await FixedDeparture.find();

    res.status(200).json({
      message: 'success',
      total: fixedDepartures.length,
      data: fixedDepartures,
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
    const fixedDeparture = await FixedDeparture.findById(req.params.id);

    res.status(200).json({
      message: 'success',
      data: fixedDeparture,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.createFixedDeparture = async (req, res) => {
  try {
    const newFixedDeparture = await FixedDeparture.create(req.body);

    res.status(201).json({
      message: 'success',
      data: newFixedDeparture,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.updateFixedDeparture = async (req, res) => {
  try {
    const updatedFixedDeparture = await FixedDeparture.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedFixedDeparture) {
      return res.status(404).json({
        message: 'fail',
        error: 'No FixedDeparture found with this id!',
      });
    }
    res.status(200).json({
      message: 'success',
      data: updatedFixedDeparture,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.deleteFixedDeparture = async (req, res) => {
  try {
    const fixedDeparture = await FixedDeparture.findByIdAndDelete(
      req.params.id
    );

    if (!fixedDeparture) {
      return res.status(404).json({
        message: 'fail',
        error: 'No FixedDeparture found with this id!',
      });
    }

    res.status(204).json({
      message: 'success',
      data: fixedDeparture,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};
