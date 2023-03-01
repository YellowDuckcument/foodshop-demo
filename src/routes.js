import Aboutus from "./pages/About";
import AddressAdd from "./pages/AddressAdd";
import AddressList from "./pages/AddressList";
import ChangePass from "./pages/ChangePass";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ManagerAccount from "./pages/ManagerAccount";
import New from "./pages/New";
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
  { path: "tdmk", component: <ChangePass /> },
  { path: "about", component: <Aboutus /> },
  { path: "new", component: <New /> },
];

export default routes;