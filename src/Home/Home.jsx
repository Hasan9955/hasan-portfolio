import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    const handleMouseMove = (e) => {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.transform = `translate(${e.clientX -12}px, ${e.clientY - 12}px)`;
        }
    };
    return (
        <div onMouseMove={handleMouseMove} className=" ">
            <div className="cursor"></div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
             <Footer></Footer>
        </div>
    );
};

export default Home;