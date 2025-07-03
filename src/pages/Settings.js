import { useEffect, useState } from 'react';
const Settings = () => {
      const [selectedValue, setSelectedValue] = useState(localStorage.getItem('BgImage'));

      const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

      useEffect(() => {
        localStorage.setItem('BgImage', String(selectedValue));
      }, [selectedValue]);

    return (
        <div className="flex justify-center">
            <div className="bg-white border rounded-lg shadow-xl p-10 my-12 mx-10 w-620">
                <h1 className="text-center text-2xl font-bold">Settings</h1>
                <br></br>
                <h3 className='max-w-sm mx-auto text-sm font-semibold'>Select background image colors</h3>
                <div className="max-w-sm mx-auto relative">
                    <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" value={selectedValue} onChange={handleChange}>
                        <option value="Light">Light</option>
                        <option value="Dark">Dark</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Settings;