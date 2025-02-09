import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const marathon = useLoaderData();
  const {title,photoURL
,marathonStart,distance
,description} = marathon;
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
          <p className="font-semibold">Start : {marathonStart}</p>
          <button className="btn btn-primary">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
