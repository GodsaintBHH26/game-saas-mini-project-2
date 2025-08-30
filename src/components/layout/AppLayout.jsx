import { Outlet } from "react-router-dom";
import Loading from "../Loading";
import HeaderSection from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <HeaderSection />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
