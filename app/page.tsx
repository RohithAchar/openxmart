import Billboard from "@/components/billboard";
import Features from "@/components/features";
import HotSelling from "@/components/hot-selling";
import Marketing from "@/components/marketing";
import NewArrivals from "@/components/new-arrivals";
import PremiumSuppliers from "@/components/premium-suppliers";
import YourSelected from "@/components/your-selected";

export default function Home() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8">
      <Billboard />
      <Features />
      <Marketing />
      <HotSelling />
      <YourSelected />
      <NewArrivals />
      <PremiumSuppliers />
    </div>
  );
}
