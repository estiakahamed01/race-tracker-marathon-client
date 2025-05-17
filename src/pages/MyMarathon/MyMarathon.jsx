import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdUpdate } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {Helmet} from "react-helmet";

const MyMarathon = () => {
  const [marathons, setMarathons] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/marathons?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMarathons(data);
      });
  }, [user.email]);

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
    <div>
      <Helmet>
        <title>Dashboard ⮞ My Marathon</title>
      </Helmet>
      <h2 className="text-2xl text-center font-bold mb-10">
        My Marathon : {marathons.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Marathon Title</th>
              <th>Deadline</th>
              <th>Update Marathon</th>
              <th>Delete Marathon</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {marathons.map((marathon, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{marathon.title}</td>
                <td>{marathon.endDate}</td>
                <td>
                  <Link to={`updateMarathon/${marathon._id}`}>
                    <button className="btn w-full">
                      <MdUpdate />
                    </button>
                  </Link>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(marathon._id)}
                    className="btn w-full"
                  >
                    <RxCross2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMarathon;
