import image1 from "../../assets/MeetTeam/Team 1.jpg";
import image2 from "../../assets/MeetTeam/Team 2.jpg";
import image3 from "../../assets/MeetTeam/Team 3.jpeg";
import image4 from "../../assets/MeetTeam/Team 4.jpg";

const MeetTeam = () => {
  return (
    <div className="flex flex-col justify-center items-center space-x-5 py-10">
      <h1 className="text-5xl font-bold">
        🏅 <span className="border-b-green-500 border-b-4">Meet the</span>{" "}
        <span className="text-green-500 border-t-black border-t-4">Team</span>{" "}
      </h1>
      <p className="mt-6 text-lg">
        <i>The people making the marathon magic happen.</i>
      </p>

      <div className="flex flex-col justify-center items-center space-y-10">
        <div className="flex flex-col justify-center items-center p-6 bg-amber-50 rounded-3xl max-w-80">
          <img className="w-full rounded-full" src={image1} alt="" />
          <h3 className="text-lg font-semibold mt-6">Md. Saifullah Haque</h3>
          <p className="text-sm text-gray-600 mb-2">Event Director ,</p>
          <p className="text-sm text-gray-500">
            10 years organizing fitness events across India.
          </p>
        </div>

        <div className="flex flex-row space-x-10">
          <div className="flex flex-col justify-center items-center p-6 bg-emerald-50 rounded-3xl">
            <img className="max-h-40 rounded-full" src={image2} alt="" />
            <h3 className="text-lg font-semibold mt-6">Md. Khalid Hossain</h3>
            <p className="text-sm text-gray-600 mb-2">Logistics Manager ,</p>
            <p className="text-sm text-gray-500">
              5 years organizing fitness events across USA.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-6 bg-emerald-50 rounded-3xl">
            <img className="max-w-60 rounded-full" src={image3} alt="" />
            <h3 className="text-lg font-semibold mt-6">Md. Sakhawat Hossain</h3>
            <p className="text-sm text-gray-600 mb-2">Volunteer Coordinator ,</p>
            <p className="text-sm text-gray-500">
              3 years organizing fitness events across USA.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-6 bg-emerald-50 rounded-3xl">
            <img className="max-w-60 rounded-full" src={image4} alt="" />
            <h3 className="text-lg font-semibold mt-6">Md. Arman Sheikh</h3>
            <p className="text-sm text-gray-600 mb-2">Volunteer Coordinator ,</p>
            <p className="text-sm text-gray-500">
              3 years organizing fitness events across USA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
