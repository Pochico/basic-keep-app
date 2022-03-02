import { ThemeProvider } from 'styled-components';
import CustomThemeProvider from './components/ThemeContext/ThemeContext';
import Header from './components/Header/Header';
import NoteContainer from './components/NoteContainer/NoteContainer';

import GlobalStyle from './theme/global';
import theme from './theme/theme';

function App() {
    return (
        <div className="App">
            <GlobalStyle />

            <ThemeProvider theme={theme}>
                <CustomThemeProvider>
                    <Header />
                    <NoteContainer />
                </CustomThemeProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
