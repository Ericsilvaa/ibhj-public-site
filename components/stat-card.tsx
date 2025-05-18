// import CountUp from "./animation/CountUp";
import { LucideIcon } from "lucide-react";
import CountUp from "./animation/CountUp";

// interface StatCardProps {
//   number: string;
//   label: string;
// }

// export default function StatCard({ number, label }: StatCardProps) {
//   // Extrair o número da string (por exemplo, "55+" se torna 55)
//   const numericValue = Number.parseInt(number.replace(/\D/g, ""));
//   const hasSuffix = number.includes("+");

//   return (
//     <div className="text-center">
//       <div className="text-4xl md:text-5xl font-bold mb-2">
//         <CountUp end={numericValue} suffix={hasSuffix ? "+" : ""} />
//       </div>
//       <div className="text-white/80 font-medium">{label}</div>
//     </div>
//   );
// }

interface StatCardProps {
  icon: LucideIcon;
  number: string;
  label: string;
  description?: string;
}

const StatCard = ({
  icon: Icon,
  number,
  label,
  description,
}: StatCardProps) => {
  const numericValue = Number.parseInt(number.replace(/\D/g, ""));
  const hasSuffix = number.includes("+");
  return (
    <div className="bg-white/10 p-6 rounded-xl text-center shadow-md ">
      <Icon className="w-8 h-8 mx-auto text-accent mb-2" />
      {/* <h3 className="text-3xl font-bold text-white">{number}</h3> */}
      <CountUp
        className="text-3xl font-bold text-white"
        end={numericValue}
        suffix={hasSuffix ? "+" : ""}
      />
      <p className="text-white font-semibold">{label}</p>
      {description && (
        <p className="text-sm text-white/70 mt-2">{description}</p>
      )}
    </div>
  );
};

export default StatCard;
