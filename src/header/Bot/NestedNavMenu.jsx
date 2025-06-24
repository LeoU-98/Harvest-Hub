import {
  Collapse,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import propTypes from "prop-types";
import { useState } from "react";
import CategoryList from "./CategoryList";

/////////////////////////////////////
///   Mega Menu Data

const megaMenuData = [
  {
    categoryItem: "Agricultural Products",
    categoryLink: "products/agricultural-products/all",
    items: [
      {
        itemTitle: "Crops & Fresh Produce",
        itemLink: "products/agricultural-products/crop-fresh-produce",
      },
      {
        itemTitle: "Seeds & Saplings",
        itemLink: "products/agricultural-products/seeds-and-saplings",
      },
      {
        itemTitle: "Dairy & livestock",
        itemLink: "products/agricultural-products/dairy-and-livestock",
      },
    ],
  },
  {
    categoryItem: "Farming Equipments",
    categoryLink: "Products/FarmingEquipments",
    items: [
      {
        itemTitle: "Machinery & Tools",
        itemLink: "Products/FarmingEquipments/Machinery&Tools",
      },
      {
        itemTitle: "Agri-Tech Solutions",
        itemLink: "Products/FarmingEquipments/Agri-TechSolution",
      },
      {
        itemTitle: "Storage & Processing ",
        itemLink: "Products/FarmingEquipments/Storage&Processing ",
      },
    ],
  },
];

export default function NestedNavMenu({ handlerText }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = megaMenuData.map((data, key) => (
    <Menu
      className="flex items-center gap-4 rounded-md border-2 border-green-500"
      key={key}
    >
      <CategoryList data={data} />
    </Menu>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom-start"
        allowHover={false}
        // allowHover={true}
      >
        <MenuHandler>
          <div className="font-medium">
            <div
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              className="middle-underline block h-full w-full cursor-pointer text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
            >
              {handlerText}
            </div>
          </div>
        </MenuHandler>
        <MenuList className="left-0 hidden max-w-screen-xl rounded-lg border-b-2 border-b-apple-500 py-3 lg:block">
          <div className="grid grid-cols-2 gap-y-2 outline-none outline-0">
            {renderItems}
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

NestedNavMenu.propTypes = {
  data: propTypes.array,
  handlerText: propTypes.string,
};
