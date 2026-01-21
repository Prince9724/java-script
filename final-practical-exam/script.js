const date = document.getElementById("date");
const select = document.getElementById("select");

const note_container = document.getElementById("note-container");
const add_note_button = document.getElementById("add-note");
const title_input = document.getElementById("title");
const description_input = document.getElementById("description");

if (!date || !select) {
  console.error("Date ya Select element nahi mila");
}

let isUpdate = false;
let updateIndex = 0;
let notes = [];

 
const addNote = () => {
    const title = title_input.value;
    const description = description_input.value;
    const noteDate = date.value;
    const priority = select.value;

    if (title === "" || description === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Required!',
            text: 'Title aur Description dono bharna zaroori hai'
        });
        return;
    }

    const note = {
        title: title,
        description: description,
        date: noteDate,
        priority: priority
    };

    notes.push(note);
    localStorage.setItem("notes-array", JSON.stringify(notes));
    displayNotes();

    
    title_input.value = "";
    description_input.value = "";
    date.value = "";
    select.value = "low";
};

 
const displayNotes = () => {
    note_container.innerHTML = "";

    const data = localStorage.getItem("notes-array");
    if (data) {
        notes = JSON.parse(data);
    }

    notes.forEach((note, i) => {
        const div = document.createElement("div");
        div.className = "card w-25 m-2";

        div.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${note.title}</h5>
            <p class="card-text">${note.description}</p>
            <p><strong>Date:</strong> ${note.date || "N/A"}</p>
            <p><strong>Priority:</strong> ${note.priority}</p>

            <button onclick="updateNotes(${i})" class="btn btn-warning btn-sm">Edit</button>
            <button onclick="deleteNote(${i})" class="btn btn-danger btn-sm">Delete</button>
        </div>
        `;

        note_container.appendChild(div);
    });
};
 
const deleteNote = (i) => {
    notes.splice(i, 1);
    localStorage.setItem("notes-array", JSON.stringify(notes));
    displayNotes();
};

 
const updateNotes = (i) => {
    isUpdate = true;
    updateIndex = i;

    title_input.value = notes[i].title;
    description_input.value = notes[i].description;
    date.value = notes[i].date;
    select.value = notes[i].priority;

    add_note_button.textContent = "Update Note";
};

 
const editNote = () => {
    notes[updateIndex].title = title_input.value;
    notes[updateIndex].description = description_input.value;
    notes[updateIndex].date = date.value;
    notes[updateIndex].priority = select.value;

    localStorage.setItem("notes-array", JSON.stringify(notes));

    isUpdate = false;
    add_note_button.textContent = "Add Notes";

    title_input.value = "";
    description_input.value = "";
    date.value = "";
    select.value = "low";

    displayNotes();
};

 
const handleUpdateAndEdit = () => {
    if (isUpdate) {
        editNote();
    } else {
        addNote();
    }
};

add_note_button.addEventListener("click", handleUpdateAndEdit);

 
displayNotes();
