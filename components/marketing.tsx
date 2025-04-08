import {
  Handshake,
  ShieldCheck,
  MapPinCheck,
  ChartNoAxesCombined,
} from "lucide-react";

const marketingData = [
  {
    title: "100% Trust",
    icon: (
      <Handshake
        strokeWidth={1.3}
        className="w-12 h-12 md:w-24 md:h-24 object-cover"
      />
    ),
  },
  {
    title: "Secure Payment",
    icon: (
      <ShieldCheck
        strokeWidth={1.3}
        className="w-12 h-12 md:w-24 md:h-24 object-cover"
      />
    ),
  },
  {
    title: "Made for Bharath",
    icon: (
      <MapPinCheck
        strokeWidth={1.3}
        className="w-12 h-12 md:w-24 md:h-24 object-cover"
      />
    ),
  },
  {
    title: "Trust",
    icon: (
      <ChartNoAxesCombined
        strokeWidth={1.3}
        className="w-12 h-12 md:w-24 md:h-24 object-cover"
      />
    ),
  },
];

const Marketing = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 py-8 gap-4 gap-y-8 rounded-2xl bg-primary text-primary-foreground px-4">
      {marketingData.map((item, idx) => (
        <div
          key={idx}
          className="overflow-hidden text-center flex flex-col items-center"
        >
          {item.icon}
          <h2 className="text-xl font-bold mt-4">{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Marketing;
