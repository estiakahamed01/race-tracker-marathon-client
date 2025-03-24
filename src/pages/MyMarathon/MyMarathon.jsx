import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdUpdate } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

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
  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-10">My Marathon : {marathons.length}</h2>
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
            {
                marathons.map((marathon, index) => <tr key={index}>
                <th>{index+1}</th>
                <td>{marathon.title}</td>
                <td>{marathon.endDate}</td>
                <td><button className="btn w-full"><MdUpdate /></button></td>
                <td><button className="btn w-full"><RxCross2 /></button></td>

              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMarathon;
