import React, { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import { useTheme, useUpdateTheme } from '../ThemeContext/ThemeContext';

import {
    CustomNote,
    NoteTitle,
    NoteText,
    EditInputTitle,
    EditInputContent,
    CustomButton,
    ButtonColumn,
} from './styles';

export default function Note({
    id,
    title,
    content,
    deleteNote,
    handleUpdateNote,
}) {
    // Esta nota recibirá los datos del estado de  CreateArea para rellenar el contenido a continuación

    const darkTheme = useTheme();
    const toggleTheme = useUpdateTheme();

    const [currentNote, setCurrentNote] = useState({
        editTitle: title,
        editContent: content,
    });
    const [editNote, setEditNote] = useState(false);

    const handleDelete = () => {
        deleteNote(id);
    };

    const handleEdit = () => {
        setEditNote(true);
        setCurrentNote((prevValue) => ({
            ...prevValue,
        }));
    };

    const handleInputEdit = (e) => {
        const { name, value } = e.target;

        setCurrentNote((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    const updateNote = () => {
        handleUpdateNote({
            id: id,
            title: currentNote.editTitle,
            content: currentNote.editContent,
        });
        setEditNote(false);
    };

    const { editTitle, editContent } = currentNote;

    const fieldStyle = {
        backgroundColor: darkTheme ? '#202124' : '#eee',
        color: darkTheme ? '#eee' : '#202124',
    };

    const cardStyle = {
        backgroundColor: darkTheme ? '#525356' : '#FDD05C',
        color: darkTheme ? '#eee' : '#202124',
    };

    return (
        <>
            {editNote ? (
                <CustomNote style={cardStyle}>
                    <EditInputTitle
                        type="text"
                        name="editTitle"
                        value={editTitle}
                        onChange={handleInputEdit}
                        style={fieldStyle}
                    />
                    <EditInputContent
                        type="text"
                        name="editContent"
                        value={editContent}
                        onChange={handleInputEdit}
                        style={fieldStyle}
                    />
                    <ButtonColumn>
                        <CustomButton onClick={updateNote}>
                            <CheckIcon />
                        </CustomButton>
                        <CustomButton onClick={() => setEditNote(false)}>
                            <CloseIcon />
                        </CustomButton>
                    </ButtonColumn>
                </CustomNote>
            ) : (
                <CustomNote className="note" style={cardStyle}>
                    <NoteTitle>{title}</NoteTitle>
                    <NoteText>{content}</NoteText>
                    <ButtonColumn>
                        <CustomButton onClick={handleDelete}>
                            <DeleteForeverIcon fontSize={'small'} />
                        </CustomButton>
                        <CustomButton onClick={handleEdit}>
                            <EditIcon fontSize={'small'} />
                        </CustomButton>
                    </ButtonColumn>
                </CustomNote>
            )}
        </>
    );
}
