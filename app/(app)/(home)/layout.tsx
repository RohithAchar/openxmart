import { Navbar } from "@/modules/home/ui/navbar";
import SearchFilter from "@/modules/home/ui/search-filter";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <SearchFilter />
      {children}
    </div>
  );
};

export default Layout;
