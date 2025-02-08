import { useEffect, useState } from "react";
import LatestMarathonCard from "./LatestMarathonCard";


const LatestMarathon = () => {
    const [marathons,setMarathons] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/marathons')
        .then(res => res.json())
            .then(data => {
                setMarathons(data);
            })
    },[])
    return (
        <div className="my-10">
            <div className="grid grid-cols-3 gap-5 w-9/12 mx-auto">
                {
                    marathons.map(marathon => <LatestMarathonCard marathon={marathon} key={marathon._id}></LatestMarathonCard>)
                }
            </div>
        </div>
    );
};

export default LatestMarathon;