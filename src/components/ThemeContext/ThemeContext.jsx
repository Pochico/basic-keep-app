import React, { useEffect, useState, useContext } from 'react';

export const ThemeContext = React.createContext();
export const UpdateThemeContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const useUpdateTheme = () => {
    return useContext(UpdateThemeContext);
}

export default function CustomThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    };

    useEffect(() => {
        document.body.style.backgroundColor = darkTheme ? '#202124' : 'eee';
    }, [darkTheme]);

    return (
        <div>
            <ThemeContext.Provider value={darkTheme}>
                <UpdateThemeContext.Provider value={toggleTheme}>
                    {children}
                </UpdateThemeContext.Provider>
            </ThemeContext.Provider>
        </div>
    );
}
