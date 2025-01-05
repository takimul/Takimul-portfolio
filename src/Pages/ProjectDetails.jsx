import React from "react";
import { useParams } from "react-router-dom";
import TaskTradeDetails from "./TaskTradeDetails";
import VolunteerAvenueDetails from "./VolunteerAvenueDetails";
import TravelAsiaDetails from "./TravelAsiaDetails";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div>
      {id === "1" && <TaskTradeDetails />}
      {id === "2" && <TravelAsiaDetails />}
      {id === "3" && <VolunteerAvenueDetails />}
    </div>
  );
};

export default ProjectDetails;
