import { Link, useLocation } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function BreadCrumb() {
  const location = useLocation();

  // Split the pathname into segments, ignoring empty ones
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  // Build breadcrumb paths
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = "/" + pathSegments.slice(0, index + 1).join("/");

    const label = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    if (label.toLowerCase() === "products")
      return {
        label: label,
        to: "",
        isLast: index === pathSegments.length - 1,
      };

    if (label.toLowerCase() === "product details")
      return {
        label: label,
        to: "",
        isLast: index === pathSegments.length - 1,
      };

    if (label.toLowerCase() === "blog view")
      return {
        label: label,
        to: "",
        isLast: index === pathSegments.length - 1,
      };

    return {
      label: label,
      to: path,
      isLast: index === pathSegments.length - 1,
    };
  });

  let currentItem = breadcrumbs[breadcrumbs.length - 1].label;

  if (pathSegments.includes("product-details")) {
    currentItem = "product";
    breadcrumbs[breadcrumbs.length - 1].label = "Prodcut";
  }

  if (pathSegments.includes("blog-view")) {
    currentItem = "blog";
    breadcrumbs[breadcrumbs.length - 1].label = "blog";
  }

  return (
    <div className="container mx-auto px-2">
      <div className="my-4 items-center justify-between overflow-hidden rounded-2xl border-[1px] border-gray-300 bg-white px-5 py-2 sm:flex">
        <div className="text-center">
          <span className="capitalize">{currentItem}</span>
        </div>
        <div className="mx-auto w-fit sm:mx-0">
          <nav className="my-2 flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Link
              to="/"
              className="hover:text-green-600 hover:underline dark:hover:text-green-400"
            >
              Home
            </Link>

            {breadcrumbs.map(({ label, to, isLast }, index) => (
              <div key={index} className="flex items-center">
                <ChevronRightIcon className="mx-2 h-4 w-4 text-gray-400" />
                {isLast ? (
                  <span className="font-medium text-gray-800 dark:text-white">
                    {label}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="hover:text-green-600 hover:underline dark:hover:text-green-400"
                  >
                    {label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
