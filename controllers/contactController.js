const Contact = require('./../models/Contact');

exports.getAll = async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json({
      message: 'success',
      total: contacts.length,
      data: contacts,
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
    const contact = await Contact.findById(req.params.id);

    res.status(200).json({
      message: 'success',
      data: contact,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.createContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);

    res.status(201).json({
      message: 'success',
      data: newContact,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedContact) {
      return res.status(404).json({
        message: 'fail',
        error: 'No Contact found with this id!',
      });
    }
    res.status(200).json({
      message: 'success',
      data: updatedContact,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        message: 'fail',
        error: 'No Contact found with this id!',
      });
    }

    res.status(204).json({
      message: 'success',
      data: contact,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error: error.message,
    });
  }
};
