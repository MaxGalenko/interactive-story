import { useState } from 'react';
import Story from './Story';

const BinaryTreeLayout = ({ onClick }) => {
    return (
        <div className="relative flex flex-col items-center px-2">
            {/* Root Node (Open Story 0) */}
            <div className="relative mb-12">
                <button onClick={() => onClick(0)} className="bg-emerald-500 hover:bg-emerald-700 shadow-lg shadow-emerald-500/50 hover:shadow-emerald-700/70 text-white text-sm font-bold px-4 py-2 w-40 sm:w-40 rounded">
                    Beginning
                </button>
                {/* Line connecting to level 1 (visible only on sm and larger) */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700 sm:block hidden"></div>
            </div>

            {/* Horizontal line connecting level 1 */}
            <hr className="border-t-4 border-gray-600 my-4 w-4/5 sm:w-2/3 sm:block hidden" />
            <br /><br />

            {/* Level 1 Nodes */}
            <div className="flex flex-col sm:flex-row justify-evenly mb-12 w-full relative">
                <div className="relative mb-6 sm:mb-0">
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700 sm:block hidden"></div>
                    <button onClick={() => onClick(1)} className="bg-teal-500 hover:bg-teal-700 shadow-lg shadow-teal-500/50 hover:shadow-teal-700/70 text-white text-sm font-bold px-4 py-2 w-40 sm:w-40 rounded">
                        Investigate the whispers.
                    </button>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700 sm:block hidden"></div>
                </div>

                <div className="relative mb-6 sm:mb-0">
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700 sm:block hidden"></div>
                    <button onClick={() => onClick(5)} className="bg-teal-500 hover:bg-teal-700 shadow-lg shadow-teal-500/50 hover:shadow-teal-700/70 text-white text-sm font-bold px-4 py-2 w-40 sm:w-40 rounded">
                        Stay inside the cabin.
                    </button>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700 sm:block hidden"></div>
                </div>
            </div>

            {/* Horizontal line connecting level 2 */}
            <div className="flex justify-center items-center space-x-4 my-4 w-full">
                <hr className="border-t-4 border-gray-600 w-4/5 sm:w-2/5 sm:block hidden" />
                <hr className="border-t-4 border-gray-600 w-4/5 sm:w-2/5 sm:block hidden" />
            </div>
            <br /><br />

            {/* Level 2 Nodes */}
            <div className="flex flex-col sm:flex-row justify-evenly w-full relative">
                <div className="relative mb-6 sm:mb-0 px-2">
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700 sm:block hidden"></div>
                    <button onClick={() => onClick(2)} className="bg-cyan-500 hover:bg-cyan-700 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-700/70 text-white text-sm font-bold px-4 py-2 w-40 sm:w-40 rounded">
                        Try to decipher the carvings.
                    </button>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700 sm:block hidden"></div>
                </div>

                <div className='relative mb-6 sm:mb-0 px-2 w-40'>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700 sm:block hidden"></div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700 sm:block hidden"></div>
                </div>

                <div className="relative mb-6 sm:mb-0 px-2">
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700 sm:block hidden"></div>
                    <button onClick={() => onClick(6)} className="bg-cyan-500 hover:bg-cyan-700 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-700/70 text-white text-sm font-bold px-4 py-2 w-40 sm:w-40 rounded">
                        Look out the window.
                    </button>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700 sm:block hidden"></div>
                </div>

                <div className="relative mb-6 sm:mb-0 px-2">
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700 sm:block hidden"></div>
                    <button onClick={() => onClick(9)} className="bg-cyan-500 hover:bg-cyan-700 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-700/70 text-white text-sm font-bold px-4 py-2 w-40 sm:w-40 rounded">
                        Read the journal found in the attic.
                    </button>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700 sm:block hidden"></div>
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
            {renderPage && (
                <div className='flex justify-center'>
                    <div className="flex flex-col items-center bg-white border rounded-lg shadow-xl py-14 my-12 mx-2">
                        <h1 className="text-center text-2xl font-bold">Choose Where To Start The Story</h1>
                        <br></br>
                        <BinaryTreeLayout onClick={handleClick} />
                    </div>
                </div>
            )}
            {selectedIndex !== null && <Story index={selectedIndex} />}
        </div>
    );
};

export default Choices;
