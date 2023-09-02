import GlobalStyle from "./components/styleComponents/GlobalStyle";
import { Helmet } from "react-helmet";
import vinylIcon from "../src/assets/home/vinyl-icon.jpg";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Header from "./components/functionalComponents/Header";
import Footer from "./components/functionalComponents/Footer";
import Home from "./components/functionalComponents/pages/Home";
import Headphones from "./components/functionalComponents/pages/Headphones";
import Speakers from "./components/functionalComponents/pages/Speakers";
import EarPhones from "./components/functionalComponents/pages/EarPhones";
import Checkout from "./components/functionalComponents/pages/Checkout";
import ProductPage from "./components/functionalComponents/pages/ProductPage";
import data from "../data.json";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="headphones" element={<Headphones />} />
      <Route path="earphones" element={<EarPhones />} />
      <Route path="speakers" element={<Speakers />} />
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
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
