import React from "react";

export default function UserDashboard() {
  const showHeader = () => {
    return (
      <div className="bg-dark text-white py-4">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <i className="fa fa-home"> Dashboard</i>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <section>{showHeader()}</section>;
}
