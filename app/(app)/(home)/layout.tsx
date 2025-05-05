import { Navbar } from "@/modules/home/ui/navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div>
    <Navbar />
    {children}
    </div>;
};

export default Layout;
