import { ChevronRight, StarIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const premiumSuppliers = [
  {
    id: 1,
    name: "TechPro Manufacturing",
    description:
      "Leading manufacturer of electronic components and industrial machinery with global distribution network and ISO 9001 certification.",
    logo: "/images/placeholder.webp",
    rating: 5,
    reviewCount: 428,
    yearsActive: 15,
    responseRate: 98,
    mainProducts: ["Electronics", "Machinery", "Automation"],
  },
  {
    id: 2,
    name: "Global Textile Solutions",
    description:
      "Sustainable textile manufacturer specializing in organic fabrics and eco-friendly production methods for apparel and home textiles.",
    logo: "/images/placeholder.webp",
    rating: 4,
    reviewCount: 312,
    yearsActive: 12,
    responseRate: 95,
    mainProducts: ["Apparel", "Textiles", "Fabrics"],
  },
  {
    id: 3,
    name: "Innovate Industrial Supply",
    description:
      "Full-service industrial supplier offering everything from raw materials to finished products with customization options and bulk discounts.",
    logo: "/images/placeholder.webp",
    rating: 5,
    reviewCount: 256,
    yearsActive: 8,
    responseRate: 99,
    mainProducts: ["Raw Materials", "Industrial Supplies", "Safety Equipment"],
  },
];

const PremiumSuppliers = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Premium Suppliers
            </h2>
            <p className="text-gray-500 mt-1">
              Verified manufacturers and wholesalers
            </p>
          </div>
          <Link
            href="/suppliers"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            View all suppliers <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumSuppliers.map((supplier) => (
            <Card
              key={supplier.id}
              className="overflow-hidden transition-all hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border">
                    <Image
                      src={supplier.logo || "/placeholder.svg"}
                      alt={supplier.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{supplier.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-3 w-3 ${
                                i < supplier.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        ({supplier.reviewCount})
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge
                        variant="outline"
                        className="text-xs px-1.5 py-0 border-green-500 text-green-600"
                      >
                        {supplier.yearsActive}+ Years
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs px-1.5 py-0 border-blue-500 text-blue-600"
                      >
                        Verified
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {supplier.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {supplier.mainProducts.map((product, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {product}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-xs text-gray-500">
                      Response Rate: {supplier.responseRate}%
                    </p>
                    <Button size="sm">Contact</Button>
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

export default PremiumSuppliers;
