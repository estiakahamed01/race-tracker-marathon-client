import Banner from "./Banner";
import LatestMarathon from "./LatestMarathon";
import MeetTeam from "./MeetTeam";
import UpcomingEvent from "./UpcomingEvent";
import WhyMarathon from "./WhyMarathon";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <WhyMarathon></WhyMarathon>
            <LatestMarathon></LatestMarathon>
            <UpcomingEvent></UpcomingEvent>
            <MeetTeam></MeetTeam>
        </div>
    );
};

export default Home;