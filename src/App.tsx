// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EstudiarContent from './components/estudiarContent';
import './style.css';
import MainContent from './components/mainContent';
function App() {
    return (
        <Router>
            <div>
                <h1 className="title">FIGURAS RETÓRICAS</h1>

                <Routes>
                    <Route
                        path="/"
                        element={<MainContent />}
                    />
                    <Route path="/estudiar" element={<EstudiarContent />} />
                    {/* <Route path="/practicar" element={<Practicar />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;