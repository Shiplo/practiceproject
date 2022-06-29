const addBtn = document.getElementById("add");
const noteWrapper = document.getElementById('sticky-notes');
//let noteNumber = Math.random().toString(16).slice(2);

// Add Note On click
addBtn.addEventListener('click', () => {
    addNewNote();
});

// Add New Note Function
function addNewNote() {
    const note = document.createElement('div');
    note.classList.add('single-note');
    note.innerHTML = `
        <div class="note-tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="note-text">
            <textarea name="Note" class="note-input" placeholder="Write your note hare..."></textarea>
        </div>
        <div class="note-footer">
            <button class="save">Save Note</button>
        </div>
    `;

    // Button Selector
    const edit = note.querySelector('.edit');
    const remove = note.querySelector('.delete');
    const save = note.querySelector('.save');
    const noteInput = note.querySelector('.note-input');

    // Delete Note
    remove.addEventListener('click', () => {
        note.remove();
        localStorage.removeItem(note.getAttribute('data-id'));
    });

    // Save Note
    save.addEventListener('click', () => {
        noteInput.setAttribute('disabled', 'disabled');
        const dataName = note.getAttribute('data-id');
        const dataValue = noteInput.value;
        localStorage.setItem(dataName, dataValue);
    });

    // Edit Note
    edit.addEventListener('click', () => {
        noteInput.removeAttribute('disabled');
        noteInput.focus();
    });

    // Append note to the Wrapper
    note.setAttribute('data-id', 'note-'+Math.random().toString(16).slice(2))
    noteWrapper.appendChild(note);
    noteInput.focus();
}

// Window load
window.addEventListener('load', () => {
    //console.log(JSON.stringify(localStorage));
    for (let [key, value] of Object.entries(localStorage)) {
        const note = document.createElement('div');
        note.classList.add('single-note');
        note.innerHTML = `
            <div class="note-tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="note-text">
                <textarea name="Note" class="note-input" placeholder="Write your note hare..."></textarea>
            </div>
            <div class="note-footer">
                <button class="save">Save Note</button>
            </div>
        `;

         // Button Selector
        const edit = note.querySelector('.edit');
        const remove = note.querySelector('.delete');
        const save = note.querySelector('.save');

        // Delete Note
        remove.addEventListener('click', () => {
            note.remove();
            localStorage.removeItem(note.getAttribute('data-id'));
        });

        // Save Note
        save.addEventListener('click', () => {
            noteInput.setAttribute('disabled', 'disabled');
            const dataName = note.getAttribute('data-id');
            const dataValue = noteInput.value;
            localStorage.setItem(dataName, dataValue);
        });

        // Edit Note
        edit.addEventListener('click', () => {
            noteInput.removeAttribute('disabled');
            noteInput.focus();
        });

        const noteInput = note.querySelector('.note-input');
        note.setAttribute('data-id', key);
        noteInput.value = value;
        noteInput.setAttribute('disabled', 'disabled');
        noteWrapper.appendChild(note);
    }
});