import React, { useState } from 'react';
import * as S from './styles';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import { useTheme, useUpdateTheme } from '../ThemeContext/ThemeContext';

export default function CreateArea({ addNote }) {
    const darkTheme = useTheme();
    const toggleTheme = useUpdateTheme();

    // CreateArea contiene la información que se le mandará a la nota nueva al crearla, y recibe la función de addNote de NoteContainer, que es el componente que contiene el estado array con las notas

    const [noteText, setNoteText] = useState({
        title: '',
        content: '',
    });
    const [error, setError] = useState(null);
    const [editState, setEditState] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNoteText((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    const handleClick = (e) => {
        e.preventDefault();

        if (!title || !content) {
            setError('Rellena los campos, re puto');
            return;
        }

        addNote(noteText);
        setNoteText({
            title: '',
            content: '',
        });
    };

    const { title, content } = noteText;

    const fieldStyle = {
        backgroundColor: darkTheme ? '#202124' : '#eee',
        color: darkTheme ? '#eee' : '#202124',
    };

    const formStyle = {
        backgroundColor: darkTheme ? '#525356' : '#f5ba13',
        border: darkTheme ? '6px solid #525356' : '6px solid #f5ba13',
    };

    return (
        <div>
            <S.Formulario
                onClick={() => {
                    setEditState(true);
                }}
                onSubmit={handleClick}
                style={formStyle}
            >
                <S.NoteTitle
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    placeholder="Title"
                    style={fieldStyle}
                />
                {editState && (
                    <S.NoteBody
                        name="content"
                        value={content}
                        onChange={handleChange}
                        placeholder="Write your note here..."
                        style={fieldStyle}
                    />
                )}
                <p className="error">{error}</p>
                {editState && (
                    <Fab onClick={handleClick}>
                        <AddIcon sx={{ lineHeight: '32px' }} />
                    </Fab>
                )}
                {/* <S.IconContainer /> */}
            </S.Formulario>
        </div>
    );
}
