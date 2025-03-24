import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAuth from "../../hooks/useAuth";


const AddMarathon = () => {
  const {user} = useAuth()
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

  const handleAddMarathon = e =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const initialData = Object.fromEntries(formData.entries())
    initialData.createdAt = new Date();
    initialData.creatorEmail  = user.email
    console.log(initialData)

  fetch('http://localhost:5000/marathons',{
    method: 'POST',
    headers: {
      'content-type' :'application/json'
    },
    body: JSON.stringify(initialData)
  })
  .then(res => res.json())
  .then(data => {
    if (data.insertedId) {
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
      <h2 className="text-center text-3xl font-bold">Add Marathon Campaign</h2>
      <form onSubmit={handleAddMarathon} className="card-body space-y-4">
        <div className="flex flex-row gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold">Marathon Title*</span>
            </label>
            <input
              type="text"
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
            <select defaultValue="Pick Distance" name="distance" className="select select-bordered">
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
          <button className="btn  bg-green-500">Add Marathon</button>
        </div>
      </form>
    </div>
  );
};

export default AddMarathon;
