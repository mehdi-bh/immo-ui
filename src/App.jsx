import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Router className="router">
                <Routes className="routes">
                    <Route path="/" element={<>azqweqwee</>} />
                </Routes>
            </Router>
        </>

    );
}

export default App;