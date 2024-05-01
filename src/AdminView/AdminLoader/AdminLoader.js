import React from "react";
import "./AdminLoader.css";
import { RotatingLines } from "react-loader-spinner";

const AdminLoader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="#266431"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default AdminLoader;
