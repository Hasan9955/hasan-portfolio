import ProjectCard from "../Components/ProjectCard";
import Section from "../Components/Section"; 


const Projects = () => {
    return (
        <div id="projects" >
            <Section
                subHeading={'Explore my projects'}
                heading={'Projects'}></Section>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-5 p-2"> 

            <ProjectCard
            image={"https://i.ibb.co/FKTNGgM/eater-zone.png"}
            name={"Eater Zone"}
            liveLink={"https://eater-zone.web.app/"}
            gitLink={"https://github.com/Hasan9955/eater-zone-client"}
            ></ProjectCard>
            <ProjectCard
            image={"https://i.ibb.co/GJ363rX/Express-Cargo.png"}
            name={"Express Cargo"}
            liveLink={"https://657fe5a14f9e7f7c47fa934c--starlit-toffee-6be27f.netlify.app/"}
            gitLink={"https://github.com/Hasan9955/express-cargo-client"}
            ></ProjectCard>
            <ProjectCard
            image={"https://i.ibb.co/rfjWbSR/tech-Universe.png"}
            name={"Tech Universe"}
            liveLink={"https://technology-shop-client.web.app/"}
            gitLink={"https://github.com/Hasan9955/tech-universe-client"}
            ></ProjectCard>
            <ProjectCard
            image={"https://i.ibb.co/fSt6VTK/party-pulse.png"}
            name={"Party Pulse"}
            liveLink={"https://manage-social-events.web.app//"}
            gitLink={"https://github.com/Hasan9955/Party-Pulse"}
            ></ProjectCard> 
            </div>
        </div>
    );
};

export default Projects;