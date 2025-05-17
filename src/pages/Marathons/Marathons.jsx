import { useState } from "react";
import MarathonCard from "./MarathonCard";
import { useLoaderData } from "react-router-dom";

const Marathons = () => {
const loadedMarathons = useLoaderData()
  const [marathons,setMarathons] = useState(loadedMarathons)
  return (
    <div className="pb-10">
      <h1 className="text-5xl text-center pt-10 font-bold pb-6">
        Our <span className="text-green-500">Marathon</span> Events
      </h1>
      <div className="grid grid-cols-3 w-4/5 mx-auto gap-5">
        {
            marathons.map((marathonCard)=> <MarathonCard key={marathonCard._id} setMarathons={setMarathons} marathons={marathons} marathonCard={marathonCard}></MarathonCard>) 
        }
      </div>
    </div>
  );
};

export default Marathons;
