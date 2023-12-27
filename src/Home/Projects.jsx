import ProjectCard from "../Components/ProjectCard";
import Section from "../Components/Section"; 


const Projects = () => {
    return (
        <div>
            <Section
                subHeading={'Explore my projects'}
                heading={'Projects'}></Section>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-5 p-10"> 

            <ProjectCard
            image={"/src/assets/eater zone.png"}
            name={"Eater Zone"}
            liveLink={"https://eater-zone.web.app/"}
            gitLink={"https://github.com/Hasan9955/eater-zone-client"}
            ></ProjectCard>
            <ProjectCard
            image={"/src/assets/Express Cargo.png"}
            name={"Express Cargo"}
            liveLink={"https://657fe5a14f9e7f7c47fa934c--starlit-toffee-6be27f.netlify.app/"}
            gitLink={"https://github.com/Hasan9955/express-cargo-client"}
            ></ProjectCard>
            <ProjectCard
            image={"/src/assets/tech Universe.png"}
            name={"Tech Universe"}
            liveLink={"https://technology-shop-client.web.app/"}
            gitLink={"https://github.com/Hasan9955/tech-universe-client"}
            ></ProjectCard>
            <ProjectCard
            image={"/src/assets/party pulse.png"}
            name={"Party Pulse"}
            liveLink={"https://manage-social-events.web.app//"}
            gitLink={"https://github.com/Hasan9955/Party-Pulse"}
            ></ProjectCard> 
            </div>
        </div>
    );
};

export default Projects;