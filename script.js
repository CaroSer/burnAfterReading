const model = new NoteModel();
const colors = ["#ff7eb9", "#ff65a3", "#7afcff", "#feff9c", "#fff740"];

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('note-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    addNote()
    console.log(model.getNotes());
  });
});

function addNote() {
  let noteContent = document.getElementById('note-content').value;
  let noteTitle = document.getElementById('note-title').value;
  let noteColor = colors[Math.floor(Math.random() * colors.length)];

  let newNote = new Note(noteTitle, noteContent, noteColor);
  model.addNote(newNote);
  getNotes();
}

function deleteNote(index) {
  model.deleteNote(index);
  getNotes();
}

function getNotes() {

}