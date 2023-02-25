import AddressAdd from "./pages/AddressAdd";
import AddressList from "./pages/AddressList";
import Home from "./pages/Home";
import ManagerAccount from "./pages/ManagerAccount";
import Product from "./pages/Product";
import ShopBasket from "./pages/ShopBasket";

const routes = [
  { path: "", component: <Home /> },
  { path: "home", component: <Home /> },
  { path: "product", component: <Product /> },
  { path: "shopbasket", component: <ShopBasket /> },
  { path: "qltk", component: <ManagerAccount /> },
  { path: "sdc", component: <AddressList /> },
  { path: "addressadd", component: <AddressAdd /> },
];

export default routes;
