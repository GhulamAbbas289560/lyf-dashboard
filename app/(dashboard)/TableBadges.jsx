import { Check, CircleMinus, X, Undo2 } from "lucide-react";
export function StatusBadge({ input }) {
  const common =
    "px-2 py-1 rounded-full text-xs border font-medium flex gap-1 items-center";
  switch (input) {
    case "attend":
      return (
        <div className="flex items-center">
          <p
            className={`${common} bg-green-500/10 border-green-700 text-green-700`}
          >
            <Check size={14} />
            Attend
          </p>
        </div>
      );
    case "missed":
      return (
        <div className="flex items-center">
          <p className={`${common} bg-slate-100 border-gray-300 text-black`}>
            <Undo2 size={14} />
            Missed
          </p>
        </div>
      );
    case "cancelled":
      return (
        <div className="flex items-center">
          <p className={`${common} bg-red-500/10 border-red-700 text-red-700`}>
            <X size={14} />
            Cancelled
          </p>
        </div>
      );
    case "no_appointment":
      return (
        <div className="flex items-center">
          <p
            className={`${common} bg-orange-500/10 border-orange-700 text-orange-700`}
          >
            <CircleMinus size={14} />
            No Appointment
          </p>
        </div>
      );
  }
}
export function DiseaseBadge({ input }) {
  function styleDiseaseBadge(disease) {
    switch (disease) {
      case "sugar":
        return (
          <p
            className={`${common} bg-blue-500/10 border-blue-700 text-blue-700`}
          >
            Sugar
          </p>
        );
      case "breating_problem":
      case "breathing_problem":
        return (
          <p
            className={`${common} bg-orange-500/10 border-orange-700 text-orange-700`}
          >
            Breathing Problem
          </p>
        );
      case "bp":
        return (
          <p
            className={`${common} bg-indigo-500/10 border-indigo-700 text-indigo-700`}
          >
            BP
          </p>
        );
      case "cancer":
        return (
          <p className={`${common} bg-red-500/10 border-red-700 text-red-700`}>
            Cancer
          </p>
        );
      case "asthma":
        return (
          <p
            className={`${common} bg-yellow-500/10 border-yellow-700 text-yellow-700`}
          >
            Asthma
          </p>
        );
      case "diabetes":
        return (
          <p
            className={`${common} bg-pink-500/10 border-pink-700 text-pink-700`}
          >
            Diabetes
          </p>
        );
      case "hypertension":
        return (
          <p
            className={`${common} bg-purple-500/10 border-purple-700 text-purple-700`}
          >
            HyperTension
          </p>
        );
      case "arthritis":
        return (
          <p
            className={`${common} bg-rose-500/10 border-rose-700 text-rose-700`}
          >
            Arthritis
          </p>
        );
      default:
        return disease;
    }
  }
  const common =
    "px-2 py-1 rounded-full text-xs border font-medium flex gap-1 items-center";
  return (
    <div className="flex gap-2">
      {input.map((item, index) => (
        <div className="flex items-center" key={index}>
          {styleDiseaseBadge(item)}
        </div>
      ))}
    </div>
  );
}
