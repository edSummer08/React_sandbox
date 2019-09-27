import React from 'react';
import AppProvider from './AppProvider'
import Child from './components/child/Child'
import Comments from './components/comments/Comments'
import './App.css';

function App() {
    return (
        <AppProvider>
            <div className="App">
                <Child />
                <Comments />
            </div>
        </AppProvider>
    );
}

export default App;
