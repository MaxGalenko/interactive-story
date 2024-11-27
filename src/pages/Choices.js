import { useState } from 'react';
import Story from './Story';

const BinaryTreeLayout = ({ onClick }) => {
    return (
        <div class="container">
            <div class="row">
                <div class="tree">
                    <ul>
                        <li> <button onClick={() => onClick(0)} title='Introduction'><span>⚫</span></button>
                            <ul>
                                <li><button onClick={() => onClick(1)} title='Investigate the whispers'><span>⚫</span></button>
                                    <ul>
                                        <li> <button onClick={() => onClick(2)} title='Try to decipher the carvings'><span>⚫</span></button>
                                            <ul>
                                                <li> <button onClick={() => onClick(3)} title='Keep studying the carvings'><span>⚫</span></button></li>
                                                <li> <button onClick={() => onClick(4)} title='Run back to the cabin'><span>⚫</span></button></li>
                                            </ul>
                                        </li>
                                        <li> <button onClick={() => onClick(4)} title='Turn back to the cabin'><span>⚫</span></button></li>
                                    </ul>
                                </li>
                                <li> <button onClick={() => onClick(5)} title='Stay inside the cabin'><span>⚫</span></button>
                                    <ul>
                                        <li> <button onClick={() => onClick(6)} title='Look out the window'><span>⚫</span></button>
                                            <ul>
                                                <li> <button onClick={() => onClick(7)} title='Open the door and step outside'><span>⚫</span></button></li>
                                                <li> <button onClick={() => onClick(8)} title='Lock the door and gather in the living room'><span>⚫</span></button></li>
                                            </ul>
                                        </li>
                                        <li> <button onClick={() => onClick(9)} title='Read the journal found in the attic'><span>⚫</span></button>
                                            <ul>
                                                <li> <button onClick={() => onClick(10)} title='Read more of the journal'><span>⚫</span></button>
                                                    <ul>
                                                        <li> <button onClick={() => onClick(11)} title='Keep reading for a way to help the spirit'><span>⚫</span></button>
                                                            <ul>
                                                                <li> <button onClick={() => onClick(12)} title='Attempt the ritual'><span>⚫</span></button></li>
                                                                <li> <button onClick={() => onClick(13)} title='Leave the cabin and run'><span>⚫</span></button></li>
                                                            </ul>
                                                        </li>
                                                        <li> <button onClick={() => onClick(14)} title='Burn the journal'><span>⚫</span></button>
                                                            <ul>
                                                                <li> <button onClick={() => onClick(15)} title='Fight back against the spirits'><span>⚫</span></button>
                                                                    <ul>
                                                                        <li> <button onClick={() => onClick(16)} title='Continue fighting'><span>⚫</span></button></li>
                                                                        <li> <button onClick={() => onClick(17)} title='Try to negotiate with the spirits'><span>⚫</span></button></li>
                                                                    </ul>
                                                                </li>
                                                                <li> <button onClick={() => onClick(18)} title='Escape through a window'><span>⚫</span></button></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li> <button onClick={() => onClick(14)} title='Burn the journal'><span>⚫</span></button>
                                                    <ul>
                                                        <li> <button onClick={() => onClick(15)} title='Fight back against the spirits'><span>⚫</span></button>
                                                            <ul>
                                                                <li> <button onClick={() => onClick(16)} title='Continue fighting'><span>⚫</span></button></li>
                                                                <li> <button onClick={() => onClick(17)} title='Try to negotiate with the spirits'><span>⚫</span></button></li>
                                                            </ul>
                                                        </li>
                                                        <li> <button onClick={() => onClick(18)} title='Escape through a window'><span>⚫</span></button></li>
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