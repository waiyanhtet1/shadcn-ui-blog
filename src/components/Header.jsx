import { Outlet } from "react-router-dom";
import UserDropDown from "./UserDropDown";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between p-5">
        <h1 className="text-xl font-bold">Rick & Morty</h1>
        <ModeToggle />
        <UserDropDown />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
