import Header from "./Header";
import Footer from "./Footer";
import BookingPage from "@/pages/booking";

interface LayoutProps {
  children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <BookingPage />
      <Footer />
    </>
  );
}

export default Layout;