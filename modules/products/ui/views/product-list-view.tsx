"use client";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import ProductCard from "../components/product-card";
import { usePathname } from "next/navigation";

const ProductListView = () => {
  const trpc = useTRPC();
  const pathname = usePathname();

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useSuspenseInfiniteQuery(
      trpc.products.getMany.infiniteQueryOptions(
        {
          limit: 10,
        },
        {
          getNextPageParam: (lastPage) => {
            return lastPage.docs.length > 0 ? lastPage.nextPage : undefined;
          },
        }
      )
    );

  return (
    <div className="mx-auto w-full max-w-2/3 mt-4 grid lg:grid-cols-5 gap-4">
      {data?.pages.map(
        (page) =>
          // <div key={page.nextPage} className="flex flex-col gap-2">
          page.docs.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.image?.url}
              // tenantSubdomain={product.tenant.subdomain}
              // tenantImageUrl={product.tenant.image?.url}
              reviewRating={4}
              reviewCount={10}
              price={product.price}
            />
          ))
        // </div>
      )}
      {isFetchingNextPage && (
        <div className="flex justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-4 border-solid border-primary-foreground border-r-transparent"></div>
        </div>
      )}
      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          className="w-full"
          variant="outline"
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default ProductListView;
