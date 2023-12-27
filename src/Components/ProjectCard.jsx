import { FaEye, FaGithub } from "react-icons/fa"; 



// eslint-disable-next-line react/prop-types
const ProjectCard = ({image, name, liveLink, gitLink}) => {
    return (
        <div className="group w-full h-64 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-500">
                <div className="absolute inset-0">
                    <img className="w-full h-full rounded-lg shadow-xl shadow-black/40" src={image} alt="" />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-bold mb-3">{name}</h1>
                    <div className="flex justify-center items-center gap-4"><a href={liveLink} className="btn btn-circle text-2xl bg-white">
                        <FaEye title="Live link"></FaEye>
                    </a>
                        <a href={gitLink} className="btn btn-circle text-2xl bg-white">
                            <FaGithub title="Git RepoLink"></FaGithub>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;