import { Book, MousePointer2, Package, Telescope } from "lucide-react";
import Link from "next/link";

const links = [
  {
    name: "My Box",
    icon: <Package className="w-4 h-4 sm:w-6 sm:h-6" />,
    path: "/your-path",
  },
  {
    name: "Handbook",
    icon: <Book className="w-4 h-4 sm:w-6 sm:h-6" />,
    path: "/your-path",
  },
  {
    name: "Explore",
    icon: <Telescope className="w-4 h-4 sm:w-6 sm:h-6" />,
    path: "/your-path",
  },
  {
    name: "Selected",
    icon: <MousePointer2 className="w-4 h-4 sm:w-6 sm:h-6" />,
    path: "/your-path",
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {links.map((link, idx) => (
        <Link key={idx} href={link.path}>
          <div className="bg-accent sm:opacity-80 sm:hover:opacity-100 text-accent-foreground text-xs sm:text-base px-3 sm:px-6 lg:px-8 py-4 rounded-xl flex items-center justify-between">
            <p className="underline">{link.name}</p>
            {link.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Features;
