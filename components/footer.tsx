import { Flag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Made with pride for Bharat
        </p>
        <Flag className="h-6 w-6 text-primary" />
      </div>
    </footer>
  );
};

export default Footer;
