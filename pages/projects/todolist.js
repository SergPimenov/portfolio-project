const createNoteButton = document.querySelector('.createNote');
const newNoteInput = document.querySelector('#newNoteInput');
const notesList = document.querySelector('.toDoList .notes .notesList');
const clearAllButton = document.querySelector('.clearAllNotes');

let notesArray = [];

function resetState() {
    const savedData = localStorage.getItem('notes');
    if (savedData) {
        const savedArray = savedData.split("*");
        notesArray = [...savedArray];

        notesList.innerHTML = savedArray.map(item => {
            return `<div class="note">
            <li><input type="checkbox" isChecked="false"><p class="noteValue" style="margin:0">${item}</p></li><button class="noteElementDelete">Удалить.</button>
            </div>`;
        }).join("");
    }
}

function addNewNote() {
    if (!newNoteInput.value.length) {
        alert('Заполните поле ввода!');
        return;
    }

    notesArray.push(newNoteInput.value);

    notesList.innerHTML = notesArray.map(item => {
        return `<div class="note">
        <li><input type="checkbox" isChecked="false"><p class="noteValue" style="margin:0">${item}</p></li><button class="noteElementDelete">Удалить</button>
        </div>`
    }).join("");

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
    if (isChecked === "true") {
        event.target.setAttribute("isChecked", "false");
    } else {
        event.target.setAttribute("isChecked", "true");
    }
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