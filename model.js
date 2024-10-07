class Note {
  constructor(title, content, color) {
    this.content = content;
    this.color = color;
    this.title = title;
  }
}

class NoteModel {
  constructor() {
    this.notes = [];
  }
  addNote(note) {
    this.notes.push(note);
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
  }

  getNotes() {
    return this.notes;
  }
}