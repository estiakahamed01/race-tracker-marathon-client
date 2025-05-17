import Banner from "./Banner";
import LatestMarathon from "./LatestMarathon";
import UpcomingEvent from "./UpcomingEvent";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <LatestMarathon></LatestMarathon>
            <UpcomingEvent></UpcomingEvent>
        </div>
    );
};

export default Home;