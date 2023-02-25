import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import Home from './components/pages/Home';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Home />
                <Routes>
                    <Route path="/" exact />
                </Routes>
            </Router>
        </>
    );
}

export default App;
