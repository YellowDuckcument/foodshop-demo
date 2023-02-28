import AddressAdd from "./pages/AddressAdd";
import AddressList from "./pages/AddressList";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ManagerAccount from "./pages/ManagerAccount";
import Product from "./pages/Product";
import ShopBasket from "./pages/ShopBasket";
import ShopStore from "./pages/ShopStore";

const routes = [
  { path: "", component: <Home /> },
  { path: "home", component: <Home /> },
  { path: "product", component: <Product /> },
  { path: "shopbasket", component: <ShopBasket /> },
  { path: "shopstore/:id?", component: <ShopStore /> },
  { path: "contact", component: <Contact /> },
  { path: "qltk", component: <ManagerAccount /> },
  { path: "sdc", component: <AddressList /> },
  { path: "addressadd", component: <AddressAdd /> },
];

export default routes;