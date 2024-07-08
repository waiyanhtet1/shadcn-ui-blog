import { Outlet } from "react-router-dom";
import UserDropDown from "./UserDropDown";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between p-5 bg-slate-200">
        <h1 className="text-xl font-bold text-slate-900">Rick & Morty</h1>
        <UserDropDown />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
