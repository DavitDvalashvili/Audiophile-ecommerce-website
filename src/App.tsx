import GlobalStyle from "./components/styleComponents/GlobalStyle";
import { Helmet } from "react-helmet";
import vinylIcon from "../src/assets/home/vinyl-icon.jpg";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/functionalComponents/Header";
import Footer from "./components/functionalComponents/Footer";
import Home from "./components/functionalComponents/pages/Home";
import Pages from "./components/functionalComponents/pages/Categories";
import Checkout from "./components/functionalComponents/pages/Checkout";
import ProductPage from "./components/functionalComponents/pages/Product";
import data from "../data.json";
import categories from "../dataCategories.json";
import { BadgeContextType } from "./Types";

export const BadgeContext = createContext<BadgeContextType | undefined>(
  undefined
);

const Root = () => {
  const [showBadge, setShowBadge] = useState(false);
  const [updateBadge, setUpdateBadge] = useState(true);

  const contextValue = {
    showBadge,
    setShowBadge,
    setUpdateBadge,
    updateBadge,
  };
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href={vinylIcon} />
        <title>Audiophile-ecommerce-website</title>
      </Helmet>
      <BadgeContext.Provider value={contextValue}>
        <Header />
        <Outlet />
        <Footer />
      </BadgeContext.Provider>
    </>
  );
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Root />}>
      <Route index element={<Home />} />
      {categories.map((category) => (
        <Route
          key={`${category.category}`}
          path={`${category.category}`}
          element={<Pages />}
        />
      ))}
      <Route path="checkout" element={<Checkout />} />
      {data.map((product) => (
        <Route
          key={`${product.category}/${product.slug}`}
          path={`${product.category}/${product.slug}`}
          element={<ProductPage />}
        />
      ))}
    </Route>
  )
);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
