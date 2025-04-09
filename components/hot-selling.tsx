import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

// Sample data
const hotCategories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    productCount: 5240,
    image: "/images/placeholder.webp",
  },
  {
    id: 2,
    name: "Machinery",
    slug: "machinery",
    productCount: 3180,
    image: "/images/placeholder.webp",
  },
  {
    id: 3,
    name: "Apparel",
    slug: "apparel",
    productCount: 4720,
    image: "/images/placeholder.webp",
  },
  {
    id: 4,
    name: "Home & Garden",
    slug: "home-garden",
    productCount: 3950,
    image: "/images/placeholder.webp",
  },
  {
    id: 5,
    name: "Beauty & Personal Care",
    slug: "beauty",
    productCount: 2840,
    image: "/images/placeholder.webp",
  },
  {
    id: 6,
    name: "Automotive",
    slug: "automotive",
    productCount: 2150,
    image: "/images/placeholder.webp",
  },
];

const HotSelling = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Hot Selling Categories
            </h2>
            <p className="text-gray-500 mt-1">
              Explore our most popular product categories
            </p>
          </div>
          <Link
            href="/categories"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            View all categories <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {hotCategories.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`}>
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-sm">{category.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {category.productCount}+ products
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotSelling;
