import {Helmet} from "react-helmet";

const Avatar = () => {
  return (
    <div className="w-2/5 flex flex-row justify-center items-center space-x-7 mx-auto pt-10 pb-28 min-h-screen">
      <Helmet>
        <title>Avatar || Race Tracker</title>
      </Helmet>
      <div className="avatar flex flex-col items-center space-y-7">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2 h-fit">
          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
        <div>
            <button className="btn btn-sm btn-soft bg-green-200">Use</button>
        </div>
      </div>

      <div className="avatar flex flex-col items-center space-y-7">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2 h-fit">
          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
        <div>
            <button className="btn btn-sm btn-soft bg-green-200">Use</button>
        </div>
      </div>
    
    <div className="avatar flex flex-col  items-center space-y-7">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2 h-fit">
          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
        <div>
            <button className="btn btn-sm btn-soft bg-green-200">Use</button>
        </div>
      </div>

      <div className="avatar flex flex-col items-center space-y-7">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2 h-fit">
          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
        <div>
            <button className="btn btn-sm btn-soft bg-green-200">Use</button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
