export function compose(event) {
    const notesContainer = document.getElementById('notes-container');
    if (event.key === 'Backspace') {
      const lastNote = notesContainer.lastChild;
      if (lastNote) notesContainer.removeChild(lastNote);
      return;
    }

    if (event.key === 'Escape') {
      while (notesContainer.firstChild) {
        notesContainer.removeChild(notesContainer.firstChild);
      }
      return;
    }
  
    if (!/[a-z]/.test(event.key)) return;
  
    const note = document.createElement('div');
    note.classList.add('note');
    const keyCode = event.keyCode;
    const red = (keyCode % 256) * 2;
    const green = Math.floor(keyCode / 256) * 2;
    const blue = (keyCode % 1024) * 2;
    note.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    note.textContent = event.key;
    notesContainer.appendChild(note);
  }

  document.addEventListener('keydown', compose);
  