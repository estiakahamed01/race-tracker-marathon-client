import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const marathon = useLoaderData();
  const {_id,title,photoURL
,marathonStart,distance
,description,startDate,
endDate} = marathon;

const [isRegisterOpen,setIsRegisterOpen] = useState(false)
useEffect(() => {
  const currentDate = new Date()

  if(currentDate >= startDate && currentDate <= endDate){
    setIsRegisterOpen(true)
  }
  else{
    setIsRegisterOpen(false)
  }
},[])
  return (
    <div className="hero bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={photoURL
          }
          className=" rounded-lg shadow-2xl"
        />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="font-semibold">
            {description}
          </p>
          <p className="font-semibold">Distance : {distance
          }</p>
          <p className="font-semibold pb-5">Start : {marathonStart}</p>
          {isRegisterOpen ? <Link to={`/registerMarathon/${_id}`}>
          <button className="btn btn-primary">Register Now</button>
          </Link> : <button className="btn bg-green-500">Register Close</button> }
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
