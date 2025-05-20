import { useEffect, useState } from "react";
import LatestMarathonCard from "./LatestMarathonCard";


const LatestMarathon = () => {
    const [marathons,setMarathons] = useState([])
    useEffect(() => {
        fetch('https://race-track-server.vercel.app/marathons')
        .then(res => res.json())
            .then(data => {
                setMarathons(data);
            })
    },[])
    return (
        <div className="my-10">
            <h1 className=" text-5xl font-bold text-center py-6 pb-10">Our <span className="text-green-500">Latest</span> Marathons</h1>
            <div className="grid grid-cols-3 gap-5 w-9/12 mx-auto">
                {
                    marathons.map(marathon => <LatestMarathonCard marathon={marathon} key={marathon._id}></LatestMarathonCard>)
                }
            </div>
        </div>
    );
};

export default LatestMarathon;