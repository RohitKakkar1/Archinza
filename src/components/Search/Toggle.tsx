import { useState } from "react";
import ForYou from "./Search-you";
import YourProjects from "./Search-projects";

export default function ToggleView() {
  const [selected, setSelected] = useState<"foryou" | "projects">("foryou");

  return (
    <div className="flex flex-col items-center w-full">
      {/* Toggle */}
      <div className="flex bg-gray-200 rounded-full p-1 w-64 my-4">
        <button
          onClick={() => setSelected("foryou")}
          className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition ${
            selected === "foryou" ? "bg-blue-600 text-white" : "text-gray-600"
          }`}
        >
          For You
        </button>
        <button
          onClick={() => setSelected("projects")}
          className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition ${
            selected === "projects" ? "bg-blue-600 text-white" : "text-gray-600"
          }`}
        >
          Your Projects
        </button>
      </div>

      {/* Conditional Render */}
      <div className="w-full">
        {selected === "foryou" ? <ForYou /> : <YourProjects />}
      </div>
    </div>
  );
}
