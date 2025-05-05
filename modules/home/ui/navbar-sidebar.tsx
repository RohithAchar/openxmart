"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItem {
  name: string;
  href: string;
}

interface Props {
  items: NavbarItem[];
}

export const NavbarSidebar = ({ items }: Props) => {
  const pathname = usePathname();

  return (
    <div className="lg:hidden flex">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="border-b pb-2">Menu</SheetTitle>
            <SheetDescription className="flex flex-col gap-2 text-xl pt-8 text-right">
              {items.map((item) => (
                <Link
                  key={item.name}
                  className={cn(
                    "text-muted-foreground",
                    pathname === item.href && "text-black"
                  )}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-8 border-t">
                <Link href="/sign-up">Sign up</Link>
                <Link href="login">Login</Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
