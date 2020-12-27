import React from "react";

const Alert = ({ alert }) => {
  return (
    <div className=" pb-2 alert alert-danger text-left" role="alert">
      <h5 className="mb-0">{alert}</h5>
    </div>
  );
};

export default Alert;
