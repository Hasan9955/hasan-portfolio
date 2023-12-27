import Section from "../Components/Section";
import { FaEye, FaGithub } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";


const Projects = () => {
    return (
        <div>
            <Section
            subHeading={'Explore my projects'}
            heading={'Projects'}></Section>
            <div className="grid grid-cols-2 gap-5 p-10"> 
                <div className="relative">
                <img className="transition duration-700 ease-in-out hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 rounded-lg" src="/src/assets/eater zone.png" alt="" />
                <div className="bg-black w-full h-full rounded-lg bg-opacity-10 absolute top-0 p-3 hidden hover:flex">
                    <h1 className="text-xl text-center font-bold mb-3">Eater Zone</h1>
                    <div className="flex justify-center items-center gap-4"><FaEye className="text-3xl" title="Live link"></FaEye>
                    <FaGithub className="text-3xl" title="Git RepoLink"></FaGithub></div>
                </div>
                </div>
                <img src="/src/assets/eater zone.png" alt="" />
                <img src="/src/assets/eater zone.png" alt="" />
                <img src="/src/assets/eater zone.png" alt="" />
            </div>
        </div>
    );
};

export default Projects;