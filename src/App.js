import React from 'react';
import AppProvider from './AppProvider'
import Child from './components/child/Child'
import './App.css';

function App() {
    return (
        <AppProvider>
            <div className="App">
                <Child />
            </div>
        </AppProvider>
    );
}

export default App;
