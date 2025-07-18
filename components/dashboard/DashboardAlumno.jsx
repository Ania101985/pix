import React from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import ProgressBar from "../components/dashboard/ProgressBar";
import AdventureMap from "../components/dashboard/AdventureMap";
import AssistantPix from "../components/dashboard/AssistantPix";
import ChallengeCard from "../components/dashboard/ChallengeCard";

const DashboardAlumno = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 p-4">
      <DashboardHeader />
      <ProgressBar progress={68} />
      <AdventureMap />
      <ChallengeCard />
      <AssistantPix />
    </div>
  );
};

export default DashboardAlumno;
