import styled from 'styled-components';


export const Formulario = styled.form`
    width: 70%;
    margin: 2rem auto;
    background-color: ${({ theme }) => theme.palette.primary};
    border-radius: 12px;
    border: 6px solid ${({ theme }) => theme.palette.primary};
    position: relative;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
`;

export const NoteTitle = styled.input`
    width: 100%;
    height: 42px;
    text-align: center;
    font-size: 1.4rem;
    border: none;
    border-radius: 8px 8px 0 0;
    outline: none;
`;

export const NoteBody = styled.textarea`
    width: 100%;
    height: 300px;
    padding: 12px 20px;
    border-radius: 0 0 8px 8px;
    border: none;
    outline: none;
`;

export const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    padding-top: 9px;
    position: absolute;
    bottom: -42px;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: 0 4px 6px ${({ theme }) => theme.palette.dark};
    background-color: ${({ theme }) => theme.palette.light};
    text-align: center;
`;
