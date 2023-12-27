import Section from "../Components/Section";


const Skills = () => {
    return (
        <div>
            <Section
            subHeading={'Explore my Skills'}
            heading={'Skills'}></Section>

            <div className="grid grid-cols-5 max-w-xl gap-5 mx-auto">
                <img src="/src/assets/html.svg" alt="" />
                <img src="/src/assets/css.svg" alt="" />
                <img src="/src/assets/javascript.svg" alt="" />
                <img src="/src/assets/tailwind.svg" alt="" />
                <img src="/src/assets/bootstrap.svg" alt="" />
                <img src="/src/assets/react.svg" alt="" />
                <img src="/src/assets/firebase.svg" alt="" />
                <img src="/src/assets/nodejs.svg" alt="" />
                <img src="/src/assets/express.svg" alt="" />
                <img src="/src/assets/mongodb.svg" alt="" />
            </div>
        </div>
    );
};

export default Skills;