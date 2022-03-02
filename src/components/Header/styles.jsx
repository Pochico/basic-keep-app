import styled from 'styled-components';

export const CustomHeader = styled.header`
    padding: 16px 32px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.palette.light};
`;

export const ThemeButton = styled.div`
    border-radius: 50px;
    height: 2rem;
    width: 2rem;
    padding: 0.25rem;

    &:hover {
        cursor: pointer;
    }
`;
