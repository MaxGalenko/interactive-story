import { useState } from 'react';
import Story from './Story';

const Choices = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [renderPage, setRenderPage] = useState(true);

    const handleClick = (index) => {
        setSelectedIndex(index);
        setRenderPage(false);
    };

    return (
        <div>
            {renderPage && (
                <div>
                    <h1>Choices tree view</h1>

                    <button onClick={() => handleClick(0)}>Open Story 0</button><br/>
                    <button onClick={() => handleClick(1)}>Open Story 1</button><br/>
                    <button onClick={() => handleClick(2)}>Open Story 2</button><br/>
                    <button onClick={() => handleClick(3)}>Open Story 3</button><br/>
                    <button onClick={() => handleClick(4)}>Open Story 4</button><br/>
                    <button onClick={() => handleClick(5)}>Open Story 5</button><br/>
                </div>
            )}
            {selectedIndex !== null && <Story index={selectedIndex} />}
        </div>
    );
};

export default Choices;