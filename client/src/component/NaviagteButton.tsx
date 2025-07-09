import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

type MenuItem = {
  id: number;
  name: string;
  path: string;
};

const menulist: MenuItem[] = [
  { id: 1, name: "about", path: "/about" },
  { id: 2, name: "headandtail", path: "/headandtail" },
];

const MenuLinks = () => {
  return (
    <div className="flex justify-center gap-2">
      {menulist.map((menu) => (
        <Link
          key={menu.id}
          to={menu.path}
          className="px-6 py-2 capitalize bg-black text-white flex gap-2 items-center hover:bg-gray-800 transition"
        >
          {menu.name}
          <IoIosArrowForward className="text-lg" />
        </Link>
      ))}
    </div>
  );
};

export default MenuLinks;
