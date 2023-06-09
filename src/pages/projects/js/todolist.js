const createNoteButton = document.querySelector('.createNote');
const newNoteInput = document.querySelector('#newNoteInput');
const notesList = document.querySelector('.toDoList .notes .notesList');
const clearAllButton = document.querySelector('.clearAllNotes');

let notesArray = [];

function pullDateInHtml(array) {
    notesList.innerHTML = array.map(item => {
        return `<div class="note">
        <li><input type="checkbox" isChecked="false"><p class="noteValue" style="margin:0">${item}</p></li><button class="noteElementDelete">Удалить.</button>
        </div>`;
     }).join("");
}

function resetState() {
    const savedData = localStorage.getItem('notes');
    if (!savedData) return

    const savedArray = savedData.split("*");
    notesArray = [...savedArray];
    pullDateInHtml(savedArray);
}

function addNewNote() {
    if (!newNoteInput.value.length) return;

    notesArray.push(newNoteInput.value);
    pullDateInHtml(notesArray);
    newNoteInput.value = '';
    localStorage.setItem('notes', notesArray.join("*"));
}

function clearAllNotes() {
    notesList.innerHTML = '';
    localStorage.removeItem('notes');
    notesArray = [];
}

function changeNoteState(event) {
    const isChecked = event.target.getAttribute("isChecked");
    isChecked ? event.target.setAttribute("isChecked", "false")
        : event.target.setAttribute("isChecked", "true");
    }

function deleteSelectedElement(event) {
    if (event.target.className === 'noteElementDelete') {
        const noteValue = event.target.parentElement.querySelector('.noteValue').innerHTML;

        for(let i = 0; i <= notesArray.length; i++) {
            if (notesArray[i] === noteValue) {
                notesArray.splice(i, 1);
            }
        };

        localStorage.setItem('notes', notesArray.join("*"));

        notesList.innerHTML = notesArray.map(item => {
            return `<div class="note">
            <li><input type="checkbox" isChecked="false"><p class="noteValue" style="margin:0">${item}</p></li><button class="noteElementDelete">Удалить</button>
            </div>`
        }).join("");
    }
}

resetState()

createNoteButton.addEventListener('click', addNewNote);
clearAllButton.addEventListener('click', clearAllNotes);
notesList.addEventListener('change', (e) => changeNoteState(e));
notesList.addEventListener('click', (e) => deleteSelectedElement(e));

window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addNewNote()
    }
})