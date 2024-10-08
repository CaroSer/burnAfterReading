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
  let notes = model.getNotes();
  let noteContainer = document.getElementById('note-container');
  const formElement = document.getElementById('note-form');

  noteContainer.innerHTML = '';

  noteContainer.appendChild(formElement);

  notes.forEach((note, index) => {
    let noteElement = document.createElement('div');
    noteElement.classList.add('note', 'card');
    noteElement.style.backgroundColor = note.color;

    noteElement.innerHTML = `
      <div class="card-header">
      ${note.title}
      </div>

    <div class="card-body d-flex flex-column">
        <p class="mb-4">${note.content}</p>
        <button class="btn btn-danger mt-auto" onclick="deleteNote(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
</svg></i></button>
      </div>
  `;
    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';

    noteContainer.appendChild(noteElement);
  });
}