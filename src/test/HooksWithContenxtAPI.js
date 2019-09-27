import React, { useState, useContext } from 'react';
import './App.css';

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = React.createContext(
    themes.dark // значение по умолчанию
);

function ThemedButton(props) {
    const value = useContext(ThemeContext)

    return (
        <button
            onClick={props.changeTheme} 
            style={{
                backgroundColor: value.background,
                color: value.foreground
            }}
        >
            Change Theme
        </button>
    );
}

function Toolbar(props) {
    return (
        <ThemedButton changeTheme={props.changeTheme} />
    );
}

function App() {
    const [theme, toggleTheme] = useState(themes.light)

    function handleToggleTheme() {
        toggleTheme(theme === themes.dark ? themes.light : themes.dark)
    }

    // ThemedButton внутри ThemeProvider использует
    // значение светлой UI-темы из состояния, в то время как
    // ThemedButton, который находится вне ThemeProvider,
    // использует тёмную UI-тему из значения по умолчанию
    return (
        <div className="App"
            style={{
                backgroundColor: theme.background,
                color: theme.foreground
            }}
        >
            <h1>React Hooks with Context API</h1>

            <ThemeContext.Provider value={theme}>
                <Toolbar changeTheme={handleToggleTheme} />
            </ThemeContext.Provider>
            <section>
                <ThemedButton />
            </section>
        </div>
    );
}

export default App;
