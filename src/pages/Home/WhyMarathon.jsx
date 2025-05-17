const WhyMarathon = () => {
    return (
        <div className="py-10">
            <h1 className="text-5xl font-bold text-center">Why Should You Attend the <span className="text-green-500">Marathon?</span></h1>
            <p className="text-center text-sm mt-3 font-semibold"><i>More than just a run — it's an experience that transforms you.</i></p>
            <div className="flex flex-row justify-center items-stretch w-10/12 mx-auto space-x-6 mt-16">
                <div className="flex flex-col space-y-4 bg-lime-50 p-6 rounded-3xl w-1/2">
                    <h2 className="text-2xl font-bold">🏃 Challenge Yourself</h2>
                    <p className="text-lg font-semibold text-gray-500">Discover what you're truly capable of. Whether it’s your first 5K or your tenth full marathon, this event is your chance to break barriers, set new goals, and prove to yourself that you’re stronger than you think.</p>
                    <p className="font-bold text-lg">“Every step took effort, but the finish line made it all worth it.”<span className="text-base"><i>– Priya, 2024 Runner</i></span></p>
                </div>
                <div className="flex flex-col space-y-4 bg-sky-50 p-6 rounded-3xl w-1/2">
                    <h2 className="text-2xl font-bold">🤝 Connect & Belong</h2>
                    <p className="text-lg font-semibold text-gray-500">Join a passionate crowd of runners, volunteers, and supporters. The energy is electric, the cheers are real, and the friendships last beyond race day.</p>
                    <p className="font-bold text-lg">“I came alone, but left with a team.” <span className="text-base"><i>– Arjun, First-Time Participant</i></span></p>
                </div>
                
            </div>
        </div>
    );
};

export default WhyMarathon;