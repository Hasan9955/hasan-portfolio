

const Banner = () => {
    return (
        <div className="p-5 flex md:flex-row flex-col justify-between max-w-6xl mx-auto items-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text">
                <h1>HI, I am </h1>
                <p>Hasan Bin Ali.</p>
                <p>A Frontend Developer.</p>
                <button className="btn btn-outline bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 border-none text-white">Download CV</button>
            </div>
            <img className="h-80 w-80 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1" src="https://i.ibb.co/ZfLq3pC/IMG-2f157.jpg" alt="hasan" />
        </div>
    );
};

export default Banner;