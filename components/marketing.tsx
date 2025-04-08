import {
  Handshake,
  ShieldCheck,
  MapPinCheck,
  ChartNoAxesCombined,
} from "lucide-react";

const Marketing = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 py-8 gap-4 gap-y-8 rounded-2xl bg-primary text-primary-foreground">
      <div className="overflow-hidden text-center flex flex-col items-center">
        <Handshake
          strokeWidth={1.3}
          className="w-12 h-12 md:w-24 md:h-24 object-cover"
        />
        <h2 className="text-xl font-bold mt-4">100% Trust</h2>
      </div>
      <div className="overflow-hidden text-center flex flex-col items-center">
        <ShieldCheck
          strokeWidth={1.3}
          className="w-12 h-12 md:w-24 md:h-24 object-cover"
        />
        <h2 className="text-xl font-bold mt-4">Secure Payment</h2>
      </div>
      <div className="overflow-hidden text-center flex flex-col items-center">
        <MapPinCheck
          strokeWidth={1.3}
          className="w-12 h-12 md:w-24 md:h-24 object-cover"
        />
        <h2 className="text-xl font-bold mt-4">Made for Bharath</h2>
      </div>
      <div className="overflow-hidden text-center flex flex-col items-center">
        <ChartNoAxesCombined
          strokeWidth={1.3}
          className="w-12 h-12 md:w-24 md:h-24 object-cover"
        />
        <h2 className="text-xl font-bold mt-4">Trust</h2>
      </div>
    </div>
  );
};

export default Marketing;
