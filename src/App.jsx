import Blog from "./Blog/Blog";
import Account from "./register/Account";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./home/Home";
import ProductListPage from "./shop/ProductListPage/ProductListPage";
import CartView from "./cart/CartView";
import Register from "./register/Register";
import SignIn from "./register/SignIn";
import ProductDetailsPage from "./shop/ProductDetailsPage/ProductDetailsPage";
import BlogDetailsPage from "./Blog/BlogDetailsPage";
import ForgotPassword from "./register/ForgotPassword";
import ResetPassword from "./register/ResetPassword";
import EnterCode from "./register/EnterCode";
import ProductsDashboard from "./Dashoard/ProductsDashboard";
import EquipmentDashboard from "./Dashoard/EquipmentDashboard";
import SuppliesDashboard from "./Dashoard/SuppliesDashboard";
import DashboardLayout from "./Dashoard/DashboardLayout";
import Auction from "./Auction/Auction";
import AuctionListingsPage from "./Auction/AuctionListingPage";
import AuctionDetailPage from "./Auction/AuctionDetailPage";
import CreateAuctionPage from "./Auction/CreateAuctionPage";
import MyAuctionsPage from "./Auction/MyAuctionsPage";
import Monitor from "./Monitor/Monitor";
import FieldDetails from "./Monitor/FieldDetails";
import SensorAnalytics from "./Monitor/SensorAnalytics";
import AlertsNotifications from "./Monitor/AlertsNotifications";
import MerchantSetupPage from "./register/MerchantSetupPage";
import ProfileLayout from "./profile/ProfileLayout";
import ProfileEdit from "./profile/ProfileEdit";
import BasicInfoEdit from "./profile/BasicInfoEdit";
import ChangePassword from "./profile/ChangePassword";
import DeactivateAccount from "./profile/DeactivateAccount";
import ManageUsers from "./ControlCenter/ManageUsers";
import ManageBlogs from "./ControlCenter/ManageBlogs";
import ControlCenter from "./ControlCenter/ControlCenter";
import MyBidsPage from "./Auction/MyBidsPage";
import ManageProducts from "./ManageProducts/ManageProducts";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },

      {
        path: "auctions/:id",
        element: <AuctionDetailPage />,
      },
      {
        path: "merchant/setup",
        element: <MerchantSetupPage />,
      },

      {
        path: "auctions",
        element: <Auction />,
        children: [
          {
            path: "list",
            element: <AuctionListingsPage />,
          },
          {
            path: "my-auctions",
            element: <MyAuctionsPage />,
          },
          {
            path: "new",
            element: <CreateAuctionPage />,
          },
          {
            path: "my-bids",
            element: <MyBidsPage />,
          },
        ],
      },

      {
        path: "control-center",
        element: <ControlCenter />,
        children: [
          {
            path: "manage-users",
            element: <ManageUsers />,
          },
          {
            path: "manage-blogs",
            element: <ManageBlogs />,
          },
        ],
      },

      {
        path: "monitor",
        element: <Monitor />,
        children: [
          {
            path: "field-details",
            element: <FieldDetails />,
          },
          {
            path: "sensor-analytics",
            element: <SensorAnalytics />,
          },
          {
            path: "notification-alerts",
            element: <AlertsNotifications />,
          },
        ],
      },

      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "Dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "ProductsDashboard",
            element: <ProductsDashboard />,
          },
          {
            path: "EquipmentDashboard",
            element: <EquipmentDashboard />,
          },
          {
            path: "SuppliesDashboard",
            element: <SuppliesDashboard />,
          },
        ],
      },

      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          {
            path: "profile-info",
            element: <ProfileEdit />,
          },
          {
            path: "basic-info",
            element: <BasicInfoEdit />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
          {
            path: "deactivate-account",
            element: <DeactivateAccount />,
          },
        ],
      },

      {
        path: "account",
        element: <Account />,
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "signin",
            element: <SignIn />,
          },
          {
            path: "forgotpassword",
            element: <ForgotPassword />,
          },
          {
            path: "resetpassword",
            element: <ResetPassword />,
          },
          {
            path: "EnterCode",
            element: <EnterCode />,
          },
        ],
      },
      {
        path: "view-cart",
        element: <CartView />,
      },

      {
        path: "products/:type",
        element: <ProductListPage />,
      },

      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog-view/:id",
        element: <BlogDetailsPage />,
      },

      {
        path: "ProductDetails/:id",
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
