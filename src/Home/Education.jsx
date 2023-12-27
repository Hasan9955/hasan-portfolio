import Section from "../Components/Section";


const Education = () => {
    return (
        <div id="education">
            <Section
            subHeading={'About My Education'}
            heading={'Education'}
            ></Section>

            <div className="bg-gray-500 text-white border mb-10 max-w-md mx-auto rounded-xl p-5 text-xl font-bold text-center">
                <h1 className="text-2xl ">My Education:</h1>
                <p>Type: Diploma In Engineering</p>
                <p>Institute: Feni Computer Institute</p>
                <p>Duration: 2021 to present</p>
            </div>
        </div>
    );
};

export default Education;