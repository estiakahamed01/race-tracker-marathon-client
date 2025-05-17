import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateMarathon = () => {
  const {user} = useAuth();

  const marathon = useLoaderData();
  const {_id,title,photoURL
,marathonStart,distance
,description,startDate,
endDate,location} = marathon;


  const [selectedStart, setSelectedStart] = useState(null);

  const handleDateChange = (date) =>{
    setSelectedStart(date)
  }
  const [selectedEnd, setSelectedEnd] = useState(null);

  const handleDateChangeEnd = (date) =>{
    setSelectedEnd(date)
  }
  const [marathonStartDate, setMarathonStartDate] = useState(null);

  const handleMarathonStart = (date) =>{
    setMarathonStartDate(date)
  }

  const navigate = useNavigate()

  const handleUpdateMarathon = e =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const updatedData = Object.fromEntries(formData.entries())


    fetch(`http://localhost:5000/marathons/${_id}`,{
      method: 'PUT',
      headers: {
        'content-type' :'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/dashboard/myMarathon')
        }
    })
  }
    return (
        <div>
              <h2 className="text-center text-3xl font-bold">Update Marathon Campaign</h2>
              <form onSubmit={handleUpdateMarathon}  className="card-body space-y-4">
                <div className="flex flex-row gap-4">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text font-bold">Marathon Title*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={title}
                      name="title"
                      placeholder="Title"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text font-bold">Marathon Image*</span>
                    </label>
                    <input
                      type="url"
                      defaultValue={photoURL}
                      name="photoURL"
                      placeholder="Photo URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
        
                <div className="flex flex-row gap-4">
                <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text font-bold">Description*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={description}
                      name="description"
                      placeholder="Description"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text font-bold">Location*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={location}
                      name="location"
                      placeholder="Location"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
        
                <div className="flex flex-row gap-4">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text font-bold">Start Registration Date*</span>
                    </label>
                    <DatePicker
                      selected={selectedStart}
                      dateFormat="MM/dd/yyyy"
                      defaultValue={startDate}
                      name="startDate"
                      onChange={handleDateChange}
                      className="input input-bordered w-full"
                    ></DatePicker>
                  </div>
                  <div className="form-control w-1/2">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text font-bold">End Registration Date*</span>
                      </label>
                      <DatePicker
                        selected={selectedEnd}
                        dateFormat="MM/dd/yyyy"
                        defaultValue={endDate}
                        name="endDate"
                        onChange={handleDateChangeEnd}
                        className="input input-bordered w-full"
                      ></DatePicker>
                    </div>
                  </div>
                </div>
        
                <div className="flex flex-row gap-4">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text font-bold">Marathon Start Date*</span>
                    </label>
                    <DatePicker
                      selected={marathonStartDate}
                      dateFormat="MM/dd/yyyy"
                      defaultValue={marathonStart}
                      name="marathonStart"
                      onChange={handleMarathonStart}
                      className="input input-bordered w-full"
                    ></DatePicker>
                  </div>
                  <div className="form-control w-1/2">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-bold">Running Distance*</span>
                    </label>
                    <select defaultValue={distance} name="distance" className="select select-bordered">
                      <option disabled>
                        Pick Distance
                      </option>
                      <option>25k</option>
                      <option>10k</option>
                      <option>5k</option>
                      <option>3k</option>
                    </select>
                  </div>
                  </div>
                </div>
        
                <div className="form-control pt-7">
                  <button className="btn  bg-green-500">Update Marathon</button>
                </div>
              </form>
            </div>
    );
};

export default UpdateMarathon;