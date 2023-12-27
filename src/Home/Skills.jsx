import Section from "../Components/Section";


const Skills = () => {
    return (
        <div id="skills">
            <Section
            subHeading={'Explore my Skills'}
            heading={'Skills'}></Section>

            <div className="grid grid-cols-5 max-w-xl gap-5 mx-auto">
                <img src="https://i.ibb.co/82sXvYH/html.jpg" alt="" />
                <img src="https://i.ibb.co/Gs56JHD/css.jpg" alt="" />
                <img src="https://i.ibb.co/py97vR4/javascript.jpg" alt="" />
                <img src="https://i.ibb.co/09WVSW9/tailwind.jpg" alt="" />
                <img src="https://i.ibb.co/0r2y3Fw/bootstrap.jpg" alt="" />
                <img src="https://i.ibb.co/DVvbX6c/react.jpg" alt="" />
                <img src="https://i.ibb.co/NKcQ6MV/firebase.jpg" alt="" />
                <img src="https://i.ibb.co/3pRDZ5g/node.jpg" alt="" />
                <img src="https://i.ibb.co/PCdhGX9/express.jpg" alt="" />
                <img src="https://i.ibb.co/D96nGx8/mongodb.jpg" alt="" />
            </div>
        </div>
    );
};

export default Skills;