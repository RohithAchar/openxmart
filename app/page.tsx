import BackBtn from "@/components/back-btn";
import Billboard from "@/components/billboard";
import Features from "@/components/features";
import Marketing from "@/components/marketing";

export default function Home() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8">
      <Billboard />
      <Features />
      <Marketing />
    </div>
  );
}
