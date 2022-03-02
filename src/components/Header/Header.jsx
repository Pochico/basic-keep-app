import React from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';

import { CustomHeader, Title, ThemeButton } from './styles';
import { useTheme, useUpdateTheme } from '../ThemeContext/ThemeContext';

export default function Header() {
    const darkTheme = useTheme();
    const toggleTheme = useUpdateTheme();

    const style = {
        backgroundColor: darkTheme ? '#202124' : '#f5ba13',
        boxShadow: darkTheme ? '0 0 10px #fbfbfb' : '0 0 10px rgba(0,0,0,.3)',
    };

    const iconStyle = {
        boxShadow: darkTheme ? '0 0 10px #fbfbfb' : '0 0 10px rgba(0,0,0,.3)',
    };

    return (
        <div>
            <CustomHeader style={style}>
                <Title>Keep</Title>
                <ThemeButton onClick={toggleTheme} style={iconStyle}>
                    {darkTheme ? (
                        <LightMode sx={{ color: 'white' }} />
                    ) : (
                        <DarkMode sx={{ color: 'white' }} />
                    )}
                </ThemeButton>
            </CustomHeader>
        </div>
    );
}
