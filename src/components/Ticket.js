import React from "react";

const Ticket = ({ ticket, unit, name, desc, completed }) => {
  return (
    <div className="card mt-2">
      <div className="card-header">Ticket #: {ticket}</div>
      <div className="card-body">
        <p className="card-text">Unit: {unit.toUpperCase()}</p>
        <p className="card-text">Name: {name.toUpperCase()}</p>
        <p className="card-text">Description: {desc.toUpperCase()}</p>
        <p className="card-text">Completed: {completed ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};
export default Ticket;
