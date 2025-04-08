import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BackBtn from "@/components/back-btn";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Flag,
  Heart,
  HelpCircle,
  LogOut,
  Package,
  Shield,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";

const links = [
  {
    name: "Seller Space",
    icon: <User className="w-4 h-4 sm:w-6 sm:h-6" />,
    path: "/my-box",
  },
  {
    name: "My Box",
    icon: <Package className="w-4 h-4 sm:w-6 sm:h-6" />,
    path: "/my-box",
  },
];

const extraLinks = [
  {
    name: "Connect with us",
    icon: <Users className="w-4 h-4 sm:w-6 sm:h-6" />,
    path: "/connect",
  },
  {
    name: "Help Center",
    icon: <HelpCircle className="w-4 h-4 sm:w-6 sm:h-6" />,
    path: "/help",
  },
  {
    name: "About Us",
    icon: <Heart className="w-4 h-4 sm:w-6 sm:h-6" />,
    path: "/about",
  },
  {
    name: "Legal & Policy",
    icon: <Shield className="w-4 h-4 sm:w-6 sm:h-6" />,
    path: "/legal",
  },
  {
    name: "Logout",
    icon: <LogOut className="w-4 h-4 sm:w-6 sm:h-6" />,
    path: "/logout",
  },
];

const AccountPage = () => {
  return (
    <div className="flex flex-col h-full">
      <main className="container mx-auto py-8 px-4 space-y-6 flex-grow">
        <BackBtn />
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Account</h1>
          <p className="text-muted-foreground">Manage your account</p>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-lg font-medium">Name</p>
          </div>
          <Button variant="outline">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {links.map((link, idx) => (
            <Link key={idx} href={link.path}>
              <div className="bg-accent sm:opacity-80 sm:hover:opacity-100 text-accent-foreground text-xs sm:text-base px-2 sm:px-6 lg:px-8 py-4 rounded-xl flex items-center justify-between">
                <p className="underline">{link.name}</p>
                {link.icon}
              </div>
            </Link>
          ))}
        </div>

        <div className="space-y-2">
          {extraLinks.map((link, idx) => (
            <Link key={idx} href={link.path}>
              <Button
                variant="ghost"
                className="w-full justify-start text-left hover:bg-accent hover:text-accent-foreground transition-colors"
                size="lg"
              >
                {link.icon}
                {link.name}
              </Button>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AccountPage;
