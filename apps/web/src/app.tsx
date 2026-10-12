import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landing-page";
import { ListingPage } from "./pages/listing-page";
import { ProductPage } from "./pages/product-page";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/shop" element={<ListingPage />} />
      <Route path="/products/:slug" element={<ProductPage />} />
    </Routes>
  </BrowserRouter>
);
