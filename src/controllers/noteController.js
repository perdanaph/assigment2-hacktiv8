const Note = require('../models/notes')

exports.getAllNotes = async (req, res, next) => {
  try {
    const notes = Note.getAllNote()
    if (notes === null) {
      return res.status(200).json({ message: 'note kosong' })
    }
    res.status(200).json({
      message: 'Success',
      result: notes
    })
  } catch (error) {
    next(error.name)
  }
}
