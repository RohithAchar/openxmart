"use client";
import { Poppins } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { NavbarSidebar } from "./navbar-sidebar";
import { useTRPC } from "@/trpc/client";

export const navbarItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  return (
    <nav className="h-16 flex items-center justify-between lg:px-12 px-4">
      <Link href="/">
        <h1
          className={cn(
            "text-2xl font-semibold text-primary",
            poppins.className
          )}
        >
          openxmart
        </h1>
      </Link>
      <div className="hidden lg:flex items-center gap-4">
        {navbarItems.map((item) => (
          <Link
            key={item.name}
            className={cn(
              "text-muted-foreground hover:text-black",
              pathname === item.href && "text-black"
            )}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex items-center gap-4">
        {session.data?.user ? (
          <Link href="/admin">
            <Button>Dashboard</Button>
          </Link>
        ) : (
          <>
            <Link href="/sign-up">
              <Button variant="outline">Sign Up</Button>
            </Link>
            <Link href="login">
              <Button>Login</Button>
            </Link>
          </>
        )}
      </div>

      <NavbarSidebar items={navbarItems} />
    </nav>
  );
};
