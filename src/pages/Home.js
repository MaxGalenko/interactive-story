const Home = () => {
    return (
        <div className="flex justify-center">
            <div className="bg-white border rounded-lg shadow-xl p-10 mt-44 mx-10 w-620">
                <h1 className="text-center text-2xl font-bold">Welcome to Whispers in the Woods</h1>
                <br></br>
                <p className="text-center">Enter a chilling tale of mystery and terror where your choices determine 
                    the fate of four friends trapped in a cursed cabin. Prepare to face the whispers of the forest—will 
                    you uncover its secrets or become another lost soul?</p>
                <br></br>
                <div className="flex justify-center">
                    <a href='/Story'><button className="bg-cyan-500 hover:bg-cyan-700 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-700/70 text-white font-bold py-2 px-4 rounded">Start Your Journey</button></a>
                </div>
            </div>
        </div>
    );
}

export default Home;