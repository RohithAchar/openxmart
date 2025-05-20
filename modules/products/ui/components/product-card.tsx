"use client";

import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  imageUrl?: string | null;
  // tenantSubdomain: string;
  // tenantImageUrl?: string | null;
  reviewRating: number;
  reviewCount: number;
  price: number;
}

const ProductCard = ({
  id,
  name,
  imageUrl,
  // tenantSubdomain,
  // tenantImageUrl,
  reviewRating,
  reviewCount,
  price,
}: Props) => {
  return (
    <Link className="shadow rounded-md" href={`store/storeId/products/${id}`}>
      <div className="rounded-md bg-white overflow-hidden h-full flex flex-col">
        <div className="relative aspect-square">
          <Image
            alt={name}
            fill
            src={imageUrl || "/images/placeholder.webp"}
            className="object-cover"
          />
        </div>
        <div className="p-4 flex flex-col gap-3 flex-1">
          <h2 className="text-lg font-medium line-clamp-4">{name}</h2>
          <div className="flex items-center gap-2" onClick={() => {}}>
            {/* {tenantImageUrl && ( */}
            <Image
              alt={imageUrl || "/images/placeholder.webp"}
              src={imageUrl || "/images/placeholder.webp"}
              className="rounded-full border shrink-0 size-[16px]"
              width={16}
              height={16}
            />
            {/* )} */}
            <p className="text-sm underline font-medium">Store name</p>
          </div>
          {reviewCount > 0 && (
            <div className="flex items-center gap-1">
              <StarIcon className="size-3.5 fill-black" />
              <p className="text-sm font-medium">
                {reviewRating} ({reviewCount})
              </p>
            </div>
          )}
        </div>
        <div className="p-4 border-t">
          <div className="relative px-2 py-1 border bg-primary text-primary-foreground w-fit">
            <p className="text-sm font-medium">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              }).format(price)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
