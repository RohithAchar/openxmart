"use client";

import Link from "next/link";
import { useState } from "react";

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

import { useTRPC } from "@/trpc/client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu } from "lucide-react";
import { useSuspenseQuery } from "@tanstack/react-query";

const SearchFilter = () => {
  const pathname = usePathname();
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

  return (
    <div className="w-full px-2 py-4 lg:py-6 lg:px-12 bg-primary-foreground lg:space-y-4">
      <div className="flex gap-2 items-center">
        <Input className="bg-white" placeholder="search products" />
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
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
              {data?.map((category) => (
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
        {data?.map((category) => (
          <CategoryPill
            key={category.slug}
            name={category.name}
            slug={category.slug}
            isActive={pathname === category.slug}
            subcategories={category.subcategories}
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
  subcategories = [],
}: {
  name: string;
  slug: string;
  isActive?: boolean;
  subcategories?: { name: string; slug: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={slug}>
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

      {isOpen && subcategories.length > 0 && (
        <div className="absolute left-0 top-full w-48 rounded-md shadow-lg bg-white border z-50">
          {subcategories.map((subcategory) => (
            <Link
              key={subcategory.slug}
              href={`${slug}/${subcategory.slug}`}
              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted"
            >
              {subcategory.name}
            </Link>
          ))}
        </div>
      )}
    </div>
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
