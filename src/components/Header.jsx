import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>header</h1>
      <Outlet />
    </div>
  );
};

export default Header;
