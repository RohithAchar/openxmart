import { StarIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const selectedProducts = [
  {
    id: 1,
    name: "Industrial Grade CNC Machine Parts",
    description: "High precision manufacturing components for industrial use",
    price: 299.99,
    originalPrice: 349.99,
    discount: 15,
    moq: 10,
    rating: 4,
    reviewCount: 128,
    image: "/images/placeholder.webp",
  },
  {
    id: 2,
    name: "Commercial Kitchen Equipment Set",
    description: "Professional stainless steel kitchen tools for restaurants",
    price: 1299.99,
    moq: 1,
    rating: 5,
    reviewCount: 84,
    image: "/images/placeholder.webp",
  },
  {
    id: 3,
    name: "Bulk Office Furniture Package",
    description: "Complete office setup with desks, chairs and storage",
    price: 2499.99,
    originalPrice: 2999.99,
    discount: 17,
    moq: 5,
    rating: 4,
    reviewCount: 56,
    image: "/images/placeholder.webp",
  },
  {
    id: 4,
    name: "Smart IoT Sensors (Pack of 50)",
    description: "Industrial grade sensors for manufacturing automation",
    price: 799.99,
    moq: 2,
    rating: 4,
    reviewCount: 92,
    image: "/images/placeholder.webp",
  },
];

const YourSelected = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Your Selected</h2>
            <p className="text-gray-500 mt-1">
              Based on your browsing history and preferences
            </p>
          </div>
          <Button variant="outline" size="sm">
            Refresh Selection
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {selectedProducts.map((product) => (
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
                  {product.discount && (
                    <Badge className="absolute top-2 right-2 bg-red-500">
                      {product.discount}% OFF
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="font-bold">${product.price.toFixed(2)}</p>
                    {product.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-4 w-4 ${
                              i < product.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      ({product.reviewCount})
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    MOQ: {product.moq} units
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YourSelected;
