const Hotel = require('./../models/Hotel');

exports.getAll = async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json({
      message: 'success',
      total: hotels.length,
      data: hotels,
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
    const hotel = await Hotel.findById(req.params.id);

    res.status(200).json({
      message: 'success',
      data: hotel,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.createHotel = async (req, res) => {
  try {
    const newHotel = await Hotel.create(req.body);

    res.status(201).json({
      message: 'success',
      data: newHotel,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedHotel) {
      return res.status(404).json({
        message: 'fail',
        error: 'No Hotel found with this id!',
      });
    }
    res.status(200).json({
      message: 'success',
      data: updatedHotel,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);

    if (!hotel) {
      return res.status(404).json({
        message: 'fail',
        error: 'No Hotel found with this id!',
      });
    }

    res.status(204).json({
      message: 'success',
      data: hotel,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};
