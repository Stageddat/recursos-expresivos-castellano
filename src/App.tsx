import './App.css';
import './estudiar/estudiar';
import EstudiarContent from './estudiar/estudiar';
import { useState } from 'react';
import { ContentType } from '../types/contentType';
import TestContent from './test/test';
function App() {
    // Define what type of content to show
    const [currentContent, setCurrentContent] = useState('default');

    // Handle the content when clicking the button
    const handleButtonClick = (content: ContentType) => {
        setCurrentContent(content);
    };

    // Render the content according to button response
    const renderContent = () => {
        switch (currentContent) {
            case 'estudiar':
                return <EstudiarContent />;
            case 'test':
                return <TestContent/>;
            default:
                return (
                    <div id="appContent">
                        <p className='gameModeText'>Elige modo de juego:</p>

                        <div className='gameModeButtonContainer'>
                            <button
                            className='gameModeButton'
                            onClick={() => handleButtonClick("estudiar")}>Estudiar</button>
                            
                            <button className='gameModeButton' onClick={() => handleButtonClick("test")} >Práctica</button>
                        </div>

                    </div>
                );
        }
    };

    return (
        <>
            {renderContent()}
        </>
    )
}
export default App
