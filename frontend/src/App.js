import './index.css';
import HomePage from "./pages/HomePage";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import ProtectedRouteComponent from "./components/ProtectedRouteComponent";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponrnt from "./components/FooterComponrnt";
import ScrollToTop from './utils/ScrollToTop';



function App() {



  return (
    <div className="App">
<BrowserRouter>
<ScrollToTop/>
<HeaderComponent/>
<Routes>

{/* <Route element={<RoutesWithUserChatComponent />}> */}
          {/* publicly available routes: */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-list/:pageNumParam" element={<ProductListPage />} />
          <Route path="/product-list/category/:categoryName" element={<ProductListPage />} />
          <Route path="/product-list/category/:categoryName/:pageNumParam" element={<ProductListPage />} />
          <Route path="/product-list/search/:searchQuery" element={<ProductListPage />} />
          <Route path="/product-list/search/:searchQuery/:pageNumParam" element={<ProductListPage />} />
          <Route path="/product-list/category/:categoryName/search/:searchQuery" element={<ProductListPage />} />
          <Route path="/product-list/category/:categoryName/search/:searchQuery/:pageNumParam" element={<ProductListPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page not exists 404" />
        {/* </Route> */}
<Route element={<ProtectedRouteComponent admin={false}/>} >
  <Route path="/user" element={<UserProfilePage/>}/>
  <Route path="/user/my-orders" element={<UserOrdersPage/>}/>
  <Route path="/user/cart-details" element={<UserCartDetailsPage/>}/>
  <Route path="/user/order-details/:id" element={<UserOrderDetailsPage/>}/>

  </Route>




{/* admin protected route */}

<Route element={<ProtectedRouteComponent admin={true}/>}>
  <Route path="/admin/users" element={<AdminUsersPage/>}/>
  <Route path="/admin/edit-user/:id" element={<AdminEditUserPage/>}/>
  <Route path="/admin/products" element={<AdminProductsPage/>}/>
  <Route path="/admin/create-new-product" element={<AdminCreateProductPage/>}/>
  <Route path="/admin/edit-product/:id" element={<AdminEditProductPage/>}/>
  <Route path="/admin/orders" element={<AdminOrdersPage/>}/>
  <Route path="/admin/order-details/:id" element={<AdminOrderDetailsPage/>}/>
</Route>

</Routes>

<FooterComponrnt/>

</BrowserRouter>
    </div>
  );
}

export default App;
