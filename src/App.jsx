import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import HeaderSection from "./components/layout/Header";
import AppLayout from "./components/layout/AppLayout";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

function App() {
  const location = useLocation();
  const routes = [
    {
      path: "",
      element: <Home />,
      index: true,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ];

  const state = location.state;
  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-b from-white to-[#36FFD0]">
      <Routes location={location?.background || location}>
        <Route element={<AppLayout />} path="/" errorElement={<Error />}>
          {routes.map((el) => {
            return (
              <Route path={el.path} element={el.element} index={el.index} />
            );
          })}
        </Route>
      </Routes>
      {state?.background && location.pathname === "/login" && <Login />}
      {state?.background && location.pathname === "/signup" && <Signup />}
    </div>
  );
}

export default App;
