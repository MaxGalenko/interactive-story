import { useState, useEffect } from 'react';
import Story from './Story';

const BinaryTreeLayout = ({ onClick }) => {
    const stored = localStorage.getItem('index');
    let indexArray = stored ? stored.split(',') : [];

    return (
        <div class="container">
            <div class="row">
                <div class="tree">
                    <ul>
                        <li> <button onClick={() => onClick(0)} title='Introduction'><span>{indexArray.includes('0') ? '🟢' : '⚫'}</span></button>
                            <ul>
                                <li><button onClick={() => onClick(1)} title='Investigate the whispers'><span>{indexArray.includes('1') ? '🟢' : '⚫'}</span></button>
                                    <ul>
                                        <li> <button onClick={() => onClick(2)} title='Try to decipher the carvings'><span>{indexArray.includes('2') ? '🟢' : '⚫'}</span></button>
                                            <ul>
                                                <li> <button onClick={() => onClick(3)} title='Keep studying the carvings'><span>{indexArray.includes('3') ? '🟢' : '⚫'}</span></button></li>
                                                <li> <button onClick={() => onClick(4)} title='Run back to the cabin'><span>{indexArray.includes('4') ? '🟢' : '⚫'}</span></button></li>
                                            </ul>
                                        </li>
                                        <li> <button onClick={() => onClick(4)} title='Turn back to the cabin'><span>{indexArray.includes('4') ? '🟢' : '⚫'}</span></button></li>
                                    </ul>
                                </li>
                                <li> <button onClick={() => onClick(5)} title='Stay inside the cabin'><span>{indexArray.includes('5') ? '🟢' : '⚫'}</span></button>
                                    <ul>
                                        <li> <button onClick={() => onClick(6)} title='Look out the window'><span>{indexArray.includes('6') ? '🟢' : '⚫'}</span></button>
                                            <ul>
                                                <li> <button onClick={() => onClick(7)} title='Open the door and step outside'><span>{indexArray.includes('7') ? '🟢' : '⚫'}</span></button></li>
                                                <li> <button onClick={() => onClick(8)} title='Lock the door and gather in the living room'><span>{indexArray.includes('8') ? '🟢' : '⚫'}</span></button></li>
                                            </ul>
                                        </li>
                                        <li> <button onClick={() => onClick(9)} title='Read the journal found in the attic'><span>{indexArray.includes('9') ? '🟢' : '⚫'}</span></button>
                                            <ul>
                                                <li> <button onClick={() => onClick(10)} title='Read more of the journal'><span>{indexArray.includes('10') ? '🟢' : '⚫'}</span></button>
                                                    <ul>
                                                        <li> <button onClick={() => onClick(11)} title='Keep reading for a way to help the spirit'><span>{indexArray.includes('11') ? '🟢' : '⚫'}</span></button>
                                                            <ul>
                                                                <li> <button onClick={() => onClick(12)} title='Attempt the ritual'><span>{indexArray.includes('12') ? '🟢' : '⚫'}</span></button></li>
                                                                <li> <button onClick={() => onClick(13)} title='Leave the cabin and run'><span>{indexArray.includes('13') ? '🟢' : '⚫'}</span></button></li>
                                                            </ul>
                                                        </li>
                                                        <li> <button onClick={() => onClick(14)} title='Burn the journal'><span>{indexArray.includes('14') ? '🟢' : '⚫'}</span></button>
                                                            <ul>
                                                                <li> <button onClick={() => onClick(15)} title='Fight back against the spirits'><span>{indexArray.includes('15') ? '🟢' : '⚫'}</span></button>
                                                                    <ul>
                                                                        <li> <button onClick={() => onClick(16)} title='Continue fighting'><span>{indexArray.includes('16') ? '🟢' : '⚫'}</span></button></li>
                                                                        <li> <button onClick={() => onClick(17)} title='Try to negotiate with the spirits'><span>{indexArray.includes('17') ? '🟢' : '⚫'}</span></button></li>
                                                                    </ul>
                                                                </li>
                                                                <li> <button onClick={() => onClick(18)} title='Escape through a window'><span>{indexArray.includes('18') ? '🟢' : '⚫'}</span></button></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li> <button onClick={() => onClick(14)} title='Burn the journal'><span>{indexArray.includes('14') ? '🟢' : '⚫'}</span></button>
                                                    <ul>
                                                        <li> <button onClick={() => onClick(15)} title='Fight back against the spirits'><span>{indexArray.includes('15') ? '🟢' : '⚫'}</span></button>
                                                            <ul>
                                                                <li> <button onClick={() => onClick(16)} title='Continue fighting'><span>{indexArray.includes('16') ? '🟢' : '⚫'}</span></button></li>
                                                                <li> <button onClick={() => onClick(17)} title='Try to negotiate with the spirits'><span>{indexArray.includes('17') ? '🟢' : '⚫'}</span></button></li>
                                                            </ul>
                                                        </li>
                                                        <li> <button onClick={() => onClick(18)} title='Escape through a window'><span>{indexArray.includes('18') ? '🟢' : '⚫'}</span></button></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Choices = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [renderPage, setRenderPage] = useState(true);

    const handleClick = (index) => {
        setSelectedIndex(index);
        setRenderPage(false);
    };

    return (
        <div>
            {/* Removes choices tree view after clicking a story node to load story at the selected index */}
            {renderPage && (
                <div className='flex justify-center'>
                    <div className="flex flex-col items-center bg-white border rounded-lg shadow-xl py-14 my-12 mx-2">
                        <h1 className="text-center text-2xl font-bold">Choose Where To Start The Story</h1>
                        <br></br>
                        {/*  */}
                        <BinaryTreeLayout onClick={handleClick} />
                    </div>
                </div>
            )}
            {selectedIndex !== null && <Story index={selectedIndex} />}
        </div>
    );
};

export default Choices;