import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { Billboard } from "@/modules/home/ui/billboard";

import { getQueryClient, trpc } from "@/trpc/server";
import ProductListView from "@/modules/products/ui/views/product-list-view";

export default async function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(
    trpc.products.getMany.infiniteQueryOptions({
      limit: 10,
    })
  );
  return (
    <div className="">
      <Billboard />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductListView />
      </HydrationBoundary>
    </div>
  );
}
