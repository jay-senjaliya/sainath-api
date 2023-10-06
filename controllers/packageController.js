const Package = require('./../models/Package');

exports.getAll = async (req, res) => {
  try {
    const packages = await Package.find().lean();

    res.status(200).json({
      message: 'success',
      total: packages.length,
      data: packages,
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
    const package = await Package.findById(req.params.id);

    res.status(200).json({
      message: 'success',
      data: package,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.createPackage = async (req, res) => {
  try {
    // const uploadedImages = req.files;

    // if (!uploadedImages || uploadedImages.length === 0) {
    //   return res.status(400).send("No images uploaded.");
    // }

    // const images = uploadedImages.map((file) => ({
    //   data: file.buffer,
    //   contentType: file.mimetype,
    // }));

    const newPackage = await Package.create(req.body);

    res.status(201).json({
      message: 'success',
      data: newPackage,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.updatePackage = async (req, res) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedPackage) {
      return res.status(404).json({
        message: 'fail',
        error: 'No Package found with this id!',
      });
    }
    res.status(200).json({
      message: 'success',
      data: updatedPackage,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.deletePackage = async (req, res) => {
  try {
    const package = await Package.findByIdAndDelete(req.params.id);

    if (!package) {
      return res.status(404).json({
        message: 'fail',
        error: 'No Package found with this id!',
      });
    }

    res.status(204).json({
      message: 'success',
      data: package,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};
