import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { Navbar } from "@/modules/home/ui/navbar";
import SearchFilter from "@/modules/home/ui/search-filter";
import { Suspense } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions());
  return (
    <div>
      <Navbar />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchFilter />
        </Suspense>
      </HydrationBoundary>
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
    </div>
  );
};

export default Layout;
