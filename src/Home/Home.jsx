import Footer from "./Footer";
import Navbar from "./Navbar";


const Home = () => {
    const handleMouseMove = (e) => {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.transform = `translate(${e.clientX -12}px, ${e.clientY - 12}px)`;
        }
    };
    return (
        <div onMouseMove={handleMouseMove}>
            <div className="cursor"></div>
            <Navbar></Navbar>
            {/* <a href="https://sites.google.com/view/hasan1811?usp=sharing" download className="flex justify-center text-blue-600 underline font-bold text-5xl">Download</a> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;