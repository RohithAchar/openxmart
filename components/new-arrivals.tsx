import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

const newArrivals = [
  {
    id: 1,
    name: "Solar Powered Industrial Lighting",
    description: "Energy efficient lighting solutions for warehouses",
    price: 599.99,
    moq: 5,
    addedDate: "2 days ago",
    image: "/images/placeholder.webp",
  },
  {
    id: 2,
    name: "Biodegradable Packaging Materials",
    description: "Eco-friendly packaging solutions for retail",
    price: 149.99,
    moq: 100,
    addedDate: "3 days ago",
    image: "/images/placeholder.webp",
  },
  {
    id: 3,
    name: "AI-Powered Inventory Management System",
    description: "Smart inventory tracking with predictive analytics",
    price: 1899.99,
    moq: 1,
    addedDate: "5 days ago",
    image: "/images/placeholder.webp",
  },
  {
    id: 4,
    name: "Commercial Grade Air Purification System",
    description: "HEPA filtration for offices and commercial spaces",
    price: 899.99,
    moq: 2,
    addedDate: "1 week ago",
    image: "/images/placeholder.webp",
  },
];

const NewArrivals = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">New Arrivals</h2>
            <p className="text-gray-500 mt-1">
              The latest products added to our marketplace
            </p>
          </div>
          <Link
            href="/new-arrivals"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            View all new arrivals <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden transition-all hover:shadow-md"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-500">
                    New
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-medium line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="font-bold">${product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-500">
                      MOQ: {product.moq} units
                    </p>
                    <p className="text-xs text-gray-500">
                      Added: {product.addedDate}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
