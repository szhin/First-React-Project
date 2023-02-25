import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Signup from './components/pages/Signup';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={<Home />}
                    />
                    <Route
                        path="/services"
                        element={<Services />}
                    />
                    <Route
                        path="/products"
                        element={<Products />}
                    />
                    <Route
                        path="/sign-up"
                        element={<Signup />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
