import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import SearchFilter from "@/modules/home/ui/search-filter";
import { Suspense } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions());
  return (
    <div className="flex flex-col min-h-screen">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchFilter />
        </Suspense>
      </HydrationBoundary>
      <div className="flex-1 h-full">{children}</div>
      <footer>
        <div className="flex justify-between items-center p-4">
          <div className="text-sm font-medium">
            <p>© 2023 PayloadCMS</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
