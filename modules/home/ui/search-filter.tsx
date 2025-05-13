"use client";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu } from "lucide-react";

const categories = [
  {
    name: "Office Supplies",
    slug: "office-supplies",
    subcategories: [
      { name: "Stationery", slug: "stationery" },
      { name: "Printers & Ink", slug: "printers-ink" },
      { name: "Office Furniture", slug: "office-furniture" },
      { name: "Storage & Organization", slug: "storage-organization" },
    ],
  },
  {
    name: "Industrial & Scientific",
    slug: "industrial-scientific",
    subcategories: [
      { name: "Lab Equipment", slug: "lab-equipment" },
      { name: "Safety Supplies", slug: "safety-supplies" },
      { name: "Power Tools", slug: "power-tools" },
      { name: "Measurement Instruments", slug: "measurement-instruments" },
    ],
  },
  {
    name: "Packaging & Shipping",
    slug: "packaging-shipping",
    subcategories: [
      { name: "Boxes & Cartons", slug: "boxes-cartons" },
      { name: "Tapes & Adhesives", slug: "tapes-adhesives" },
      { name: "Labels & Tags", slug: "labels-tags" },
      { name: "Shipping Bags", slug: "shipping-bags" },
    ],
  },
  {
    name: "Retail & POS",
    slug: "retail-pos",
    subcategories: [
      { name: "POS Systems", slug: "pos-systems" },
      { name: "Barcode Scanners", slug: "barcode-scanners" },
      { name: "Receipt Printers", slug: "receipt-printers" },
      { name: "Display Fixtures", slug: "display-fixtures" },
    ],
  },
  {
    name: "IT & Electronics",
    slug: "it-electronics",
    subcategories: [
      { name: "Computers & Laptops", slug: "computers-laptops" },
      { name: "Networking Equipment", slug: "networking-equipment" },
      { name: "Monitors & Accessories", slug: "monitors-accessories" },
      { name: "Data Storage", slug: "data-storage" },
    ],
  },
  {
    name: "Cleaning & Sanitation",
    slug: "cleaning-sanitation",
    subcategories: [
      { name: "Cleaning Equipment", slug: "cleaning-equipment" },
      { name: "Sanitizers & Disinfectants", slug: "sanitizers-disinfectants" },
      { name: "Janitorial Supplies", slug: "janitorial-supplies" },
      { name: "Waste Management", slug: "waste-management" },
    ],
  },
  {
    name: "Food & Catering",
    slug: "food-catering",
    subcategories: [
      { name: "Bulk Groceries", slug: "bulk-groceries" },
      { name: "Kitchen Equipment", slug: "kitchen-equipment" },
      { name: "Catering Disposables", slug: "catering-disposables" },
      { name: "Refrigeration", slug: "refrigeration" },
    ],
  },
  {
    name: "Construction & Hardware",
    slug: "construction-hardware",
    subcategories: [
      { name: "Building Materials", slug: "building-materials" },
      { name: "Hand Tools", slug: "hand-tools" },
      { name: "Electrical Supplies", slug: "electrical-supplies" },
      { name: "Plumbing", slug: "plumbing" },
    ],
  },
  {
    name: "Clothing & Workwear",
    slug: "clothing-workwear",
    subcategories: [
      { name: "Uniforms", slug: "uniforms" },
      { name: "Safety Wear", slug: "safety-wear" },
      { name: "Footwear", slug: "footwear" },
      { name: "Aprons & Gloves", slug: "aprons-gloves" },
    ],
  },
  {
    name: "Printing & Customization",
    slug: "printing-customization",
    subcategories: [
      { name: "Business Cards", slug: "business-cards" },
      { name: "Flyers & Brochures", slug: "flyers-brochures" },
      { name: "Custom Merchandise", slug: "custom-merchandise" },
      { name: "Signage & Banners", slug: "signage-banners" },
    ],
  },
];

const SearchFilter = () => {
  const pathname = usePathname();

  return (
    <div className="w-full px-2 py-4 lg:py-6 lg:px-12 bg-primary-foreground lg:space-y-4">
      <div className="flex gap-2 items-center">
        <Input className="bg-white" placeholder="search products" />
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Button variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="text-muted-foreground">
              <SheetHeader>
                <SheetTitle>Categories</SheetTitle>
                <SheetDescription>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                  ea sed dolor quas impedit. Adipisci!
                </SheetDescription>
              </SheetHeader>
              <CategoryList
                key="all"
                name="All"
                slug="/"
                subcategories={[]}
                isActive={pathname === "/"}
              />
              {categories.map((category) => (
                <CategoryList
                  key={category.slug}
                  name={category.name}
                  slug={category.slug}
                  subcategories={category.subcategories}
                />
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2">
        <CategoryPill
          key="all"
          name="All"
          slug="/"
          isActive={pathname === "/"}
        />
        {categories.map((category) => (
          <CategoryPill
            key={category.slug}
            name={category.name}
            slug={category.slug}
            isActive={pathname === category.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;

const CategoryPill = ({
  name,
  slug,
  isActive,
}: {
  name: string;
  slug: string;
  isActive?: boolean;
}) => {
  return (
    <Link href={slug} className="cursor-pointer">
      <Button
        variant="ghost"
        className={cn(
          "rounded-full hover:bg-white",
          isActive && "bg-primary text-primary-foreground"
        )}
      >
        {name}
      </Button>
    </Link>
  );
};

const CategoryList = ({
  name,
  slug,
  isActive,
  subcategories,
}: {
  name: string;
  slug: string;
  isActive?: boolean;
  subcategories: { name: string; slug: string }[];
}) => {
  if (name.toLowerCase() === "all") {
    return (
      <Link
        href={"/"}
        className={cn(
          "flex items-center justify-between px-4 text-sm cursor-default",
          isActive && "text-black underline"
        )}
      >
        <div>{name}</div>
      </Link>
    );
  }

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-between px-4 text-sm">
        <div className={cn(isActive && "text-black underline")}>{name}</div>
        <ChevronRight size="16px" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Subcategory</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <Link
          href={slug}
          className={cn(
            "flex items-center justify-between px-4 text-sm cursor-default underline"
          )}
        >
          <div>{name}</div>
        </Link>
        {subcategories.map((category) => (
          <Link
            href={`${slug}/${category.slug}`}
            className={cn(
              "flex items-center justify-between px-4 text-sm cursor-default text-muted-foreground"
            )}
          >
            <div>{category.name}</div>
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};
