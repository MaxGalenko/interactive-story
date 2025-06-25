import { useState } from 'react';
const Settings = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
        localStorage.setItem('count', String(count));
    }

    return (
        <div className="flex justify-center">
            <div className="bg-white border rounded-lg shadow-xl p-10 my-12 mx-10 w-620">
                <h1 className="text-center text-2xl font-bold">Settings Coming Soon</h1>
                <button onClick={increment}>Click</button>
                <p>{count}</p>
            </div>
        </div>
    );
}

export default Settings;