import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import HeaderSection from "./components/layout/Header";
import AppLayout from "./components/layout/AppLayout";

function App() {
  const routes = [
    {
      path: "",
      element: <Home />,
      index: true,
    },
    {
      
    }
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />} path="/" errorElement={<Error/>}>
            {routes.map((el) => {
              return (
                <Route path={el.path} element={el.element} index={el.index} />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
