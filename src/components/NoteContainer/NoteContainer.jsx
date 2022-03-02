import React, { useState } from 'react';
import CreateArea from '../CreateArea/CreateArea';
import Note from '../Note/Note';

export default function NoteContainer() {
    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    };

    const deleteNote = (id) => {
        setNotes((prevNotes) => {
            return prevNotes.filter((note, i) => {
                return i !== id;
            });
        });
    };

    const handleUpdateNote = ({ id, title, content }) => {
        const editedNotes = notes.map((note, index) => {
            if (index === id) {
                return { id, title, content };
            } else {
                return note;
            }
        });
        setNotes(editedNotes);
    };

    // En este componente se crea la función de añadir nota, ya que es el que tiene el estado con el array de notas que es el que se va a pintar.

    // Esta función se pasa a create area, que tiene los datos de que se le pasarán a la nota para rellenarla
    return (
        <div>
            <CreateArea addNote={addNote} />
            {notes.map((note, index) => {
                return (
                    <Note
                        id={index}
                        key={index}
                        title={note.title}
                        content={note.content}
                        deleteNote={deleteNote}
                        handleUpdateNote={handleUpdateNote}
                    />
                );
            })}
        </div>
    );
}
