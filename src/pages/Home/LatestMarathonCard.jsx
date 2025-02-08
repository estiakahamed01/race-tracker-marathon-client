import { IoLocationSharp } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";

const LatestMarathonCard = ({marathon}) => {
    const {title,location,endDate,photoURL} = marathon;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img className="h-60"
      src={photoURL}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="inline-flex items-center gap-4 font-semibold text-xl"><IoLocationSharp /> <span className="text-lg">{location}</span></p>
    <p className="inline-flex items-center gap-4 font-semibold text-xl"><BsCalendar2DateFill /> <span className="text-base">{endDate}</span></p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">See Details</button>
    </div>
  </div>
</div>
    );
};

export default LatestMarathonCard;