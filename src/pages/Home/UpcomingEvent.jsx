import upcomingEvent from "../../assets/UpcomingEvent/UpcomingEvent.png";
import sponsor from "../../assets/UpcomingEvent/Sponsor.jpeg";
const UpcomingEvent = () => {
    return (
        <div className="bg-green-50 py-10 rounded-2xl">
            <h1 className='text-5xl font-bold px-7 py-5 flex justify-center mb-10'><u>Upcoming Event</u></h1>
            <div className="flex flex-row justify-center items-center space-x-20">
                <div className="w-2/5">
                    <img className="rounded-3xl w-full" src={upcomingEvent} alt="" />
                </div>
                <div className=" space-y-3">
                    <h1 className="text-4xl font-bold">Grit & Glory Marathon</h1>
                    <p className="text-xl font-semibold text-gray-500"><i>Push Your Limits!</i></p>
                    <p className="text-xl"><span className="font-bold">Registration Start :</span> 01 January 2026</p>
                    <p className="text-xl"><span className="font-bold">Venue :</span> Shahbagh , Dhaka University</p>
                    <p className="text-xl"><span className="font-bold">Distance :</span></p>
                    <ol className="text-base ml-24">
                        <li>30k</li>
                        <li>20k</li>
                        <li>10k</li>
                    </ol>
                    <p><span className="font-bold">Our Gold Sponsor :</span></p>
                    <img className="size-28 rounded-2xl" src={sponsor} alt="" />
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvent;