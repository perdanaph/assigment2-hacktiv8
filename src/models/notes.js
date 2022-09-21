/* eslint-disable camelcase */
const { notes } = require('../storage/notes.json')

class Note {
  static getAllNote () {
    return notes.map((note) => note)
  }
}

module.exports = Note
