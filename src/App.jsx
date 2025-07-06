import Blog from "./Blog/Blog";
import Account from "./register/Account";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./home/Home";
import ProductListPage from "./shop/ProductListPage/ProductListPage";
import CartDetialsPage from "./cart/CartDetialsPage";
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
        path: "/Harvest-Hub",
        element: <Home />,
        index: true,
      },

      {
        path: "/Harvest-Hub/auctions/:id",
        element: <AuctionDetailPage />,
      },
      {
        path: "/Harvest-Hub/merchant/setup",
        element: <MerchantSetupPage />,
      },

      {
        path: "/Harvest-Hub/auctions",
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
        path: "/Harvest-Hub/control-center",
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
        path: "/Harvest-Hub/monitor",
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
        path: "/Harvest-Hub/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/Harvest-Hub/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "products-dashboard",
            element: <ProductsDashboard />,
          },
          {
            path: "equipment-dashboard",
            element: <EquipmentDashboard />,
          },
          {
            path: "supplies-dashboard",
            element: <SuppliesDashboard />,
          },
        ],
      },

      {
        path: "/Harvest-Hub/profile",
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
        path: "/Harvest-Hub/account",
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
            path: "forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "reset-password",
            element: <ResetPassword />,
          },
          {
            path: "enter-code",
            element: <EnterCode />,
          },
        ],
      },
      {
        path: "/Harvest-Hub/view-cart",
        element: <CartDetialsPage />,
      },

      {
        path: "/Harvest-Hub/products/:type",
        element: <ProductListPage />,
      },

      {
        path: "/Harvest-Hub/blog",
        element: <Blog />,
      },
      {
        path: "/Harvest-Hub/blog-view/:id",
        element: <BlogDetailsPage />,
      },

      {
        path: "/Harvest-Hub/product-details/:id",
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
