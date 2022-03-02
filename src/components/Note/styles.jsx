import styled from 'styled-components';

export const CustomNote = styled.div`
    background: #fff;
    border-radius: 6px;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.5);
    padding: 12px 12px 24px 12px;
    width: 300px;
    margin: 16px;
    float: left;
    position: relative;
`;

export const NoteTitle = styled.h2`
    font-size: 1.1rem;
    margin-bottom: 6px;
    width: 80%;
`;

export const NoteText = styled.p`
    font-size: 1.1rem;
    margin-bottom: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
    width: 80%;
`;

export const EditInputTitle = styled.input`
    width: 80%;
    height: 2rem;
    padding-left: 0.5rem;
    border-radius: 6px 6px 0 0;
    border: none;
`;

export const EditInputContent = styled.input`
    width: 80%;
    min-height: 2rem;
    padding-left: 0.5rem;
    border-radius: 0 0 6px 6px;
    border: none;
`;

export const ButtonColumn = styled.div`
    width: 42px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 4%;
`;

export const CustomButton = styled.button`
    border-radius: 100px;
    width: 32px;
    height: 32px;
    background-color: #d1d1d1;
    border: none;
    outline: none;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.45);
    margin-bottom: 12px;
    padding-top: 4px;
    transition: 0.3s;

    &:hover {
        cursor: pointer;
        box-shadow: -4px -4px 6px rgba(0, 0, 0, 0.45);
    }
`;
