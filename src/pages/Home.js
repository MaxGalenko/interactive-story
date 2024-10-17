const Home = () => {
    return (
        <div className="flex justify-center">
            <div className="p-8 mt-28 mx-6 sm:mx-8 md:mx-24 lg:mx-44 lg:mt-44 xl:mx-72 2xl:mx-96 shadow-xl">
                <h1 className="text-center text-2xl font-bold">Welcome to Interactive Story</h1>
                <br></br>
                <p className="text-center">Explanation for the intro</p>
                <br></br>
                <div className="flex justify-center">
                    <button className="bg-cyan-500 hover:bg-cyan-700 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-700/70 text-white font-bold py-2 px-4 rounded">Start Your Journey</button>
                </div>
            </div>
        </div>
    );
}
 
export default Home;