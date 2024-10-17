import { useState } from 'react';
import Logo from '../assets/Butterfly-Effect-Logo.png';


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <nav className="flex items-center justify-between flex-wrap p-6 bg-white border-gray-200 dark:bg-cyan-700">
            <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
                <a href='/'>
                    <img src={ Logo } className="w-100 h-10 mr-2" alt="Logo" />
                </a>
                <a href='/'>
                    <h1 className='text-xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-50'>My Interactive-Story</h1>
                </a>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                    className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                    className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div
            className={`w-full block flex-wrap lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
            >
                <div className="text-sm lg:flex-grow">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-cyan-800 md:dark:bg-cyan-700 dark:border-cyan-600">
                        <li>
                            <a href="/" id='Nav' class="flex items-center py-2 px-3 hover:underline underline-offset-4 hover:decoration-2 text-cyan-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                        </li>
                        <li>
                            <a href="/About" class="flex items-center py-2 px-3 hover:underline underline-offset-4 hover:decoration-2 text-cyan-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <a href="/Choices" class="flex items-center py-2 px-3 hover:underline underline-offset-4 hover:decoration-2 text-cyan-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">Choices</a>
                        </li>
                        <li>
                            <a href="/Settings" class="flex items-center py-2 px-3 hover:underline underline-offset-4 hover:decoration-2 text-cyan-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">Settings</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;