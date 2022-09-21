/* eslint-disable camelcase */
const { notes } = require('../storage/notes.json')

class Note {
  static findNoteByUserid (user_id) {
    return notes.filter((note) => note.user_id === user_id)
  }
}

module.exports = Note
