import { IoLocationSharp } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MarathonCard = ({marathonCard,setMarathons,marathons}) => {
    const {_id,title,photoURL
        ,marathonStart,distance
        ,description,startDate,
        endDate,location} = marathonCard;

        const handleDelete = (_id) => {
            console.log(_id);
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                fetch(`http://localhost:5000/marathons/${_id}`, {
                  method: 'DELETE'
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your Marathon has been deleted.",
                        icon: "success",
                      });
                      const remaining = marathons.filter(mar => mar._id !== _id )
                      setMarathons(remaining);
                    }
                  });
              }
            });
          };
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
            <div className="card-actions justify-center gap-5 pt-7">
              {/* <button className="btn bg-green-100">Update</button> */}
              <Link to={`updateMarathon/${_id}`}><button className="btn bg-green-100">Update</button></Link>
              <button onClick={() => handleDelete(_id)} className="btn bg-red-100">Delete</button>
              <Link to={`${_id}`}><button className="btn bg-green-400">See Details</button></Link>
            </div>
          </div>
        </div>
    );
};

export default MarathonCard;