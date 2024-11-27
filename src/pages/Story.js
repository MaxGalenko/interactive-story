import { useState, useEffect } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import segments from '../components/StoryData';

const Story = ({ index }) => {
    const [currentSegment, setCurrentSegment] = useState(index ? index : 0); // Starts the story at the index of the choice in the Choices page
    const [typingFinished, setTypingFinished] = useState(false);

    const currentStory = segments[currentSegment];

    // True if the 2 choices lead to the beginning of the story
    const bothChoicesLeadToEnd = currentStory.choices.length === 2 &&
        currentStory.choices[0].nextSegment === 0 &&
        currentStory.choices[1].nextSegment === 0;

    const typingTime = currentStory.text.length * 10 + 1200; // Makes the buttons appear 1200 milliseconds after the typing stops

    // Reset typingFinished and start timer when segment changes
    useEffect(() => {
        setTypingFinished(false);  // Hide buttons at the start of each segment
        const timer = setTimeout(() => {
            setTypingFinished(true);  // Show buttons once typing is done
        }, typingTime);

        return () => clearTimeout(timer);  // Cleanup timer if component unmounts or changes
    }, [currentSegment, typingTime]);  // Effect depends on currentSegment

    return (
        <div className="flex justify-center">
            <div className={`${currentStory.bgColor} border rounded-lg shadow-xl p-10 my-12 mx-10 w-620`}>
                <div className={`text-lg ${currentStory.textColor} font-medium`}>
                    <TypeWriterEffect
                        textStyle={{ textAlign: "justify" }}
                        key={currentSegment} // Re-renders the text when the currentSegment changes, ensuring the new segment of the story is displayed
                        startDelay={100}
                        cursorColor={currentStory.cursorColor}
                        hideCursorAfterText={true}
                        text={currentStory.text}
                        typeSpeed={10} // Controls the speed at which characters appear (in milliseconds)
                    />
                </div>
                {typingFinished && (
                    <div className="mt-4 flex justify-center">
                        {/* Renders 2 choice buttons or restart button when you reached the end of the story */}
                        {bothChoicesLeadToEnd ? (
                            <a href='/Story'><button className="bg-cyan-500 hover:bg-cyan-700 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-700/70 text-white font-bold py-2 px-4 rounded">Restart</button></a>
                        ) : (
                            currentStory.choices.map((choice, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSegment(choice.nextSegment)}
                                    className="bg-cyan-500 hover:bg-cyan-700 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-700/70 text-white font-bold py-2 px-4 mx-4 rounded"
                                >
                                    {choice.text}
                                </button>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>

    );
}

export default Story;