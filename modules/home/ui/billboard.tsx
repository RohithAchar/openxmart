"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const Billboard = () => {
  const trpc = useTRPC();
  const billboard = useQuery(trpc.home.getBillboard.queryOptions());

  if (billboard.isLoading) {
    return <BillboardSkeleton />;
  }

  if (billboard.data?.image.url) {
    return (
      <div
        className="w-full aspect-square lg:aspect-[16/5] border rounded-lg flex items-center justify-center"
        style={{
          backgroundImage: `url(${billboard.data.image.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-2xl lg:text-4xl font-semibold text-white text-shadow-lg">
          {billboard.data.title}
        </h2>
      </div>
    );
  }
};

const BillboardSkeleton = () => {
  return (
    <div className="w-full aspect-square lg:aspect-[16/5]">
      <div className="h-full bg-muted-foreground animate-pulse rounded-lg"></div>
    </div>
  );
};
