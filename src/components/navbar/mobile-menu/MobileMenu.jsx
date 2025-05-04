import { Link, useLocation } from "react-router-dom";
import { isStoreSelected, isCartSelected } from "../../../utils/checkRoutes";

const MobileMenu = ({closeFn }) => {
  const loc = useLocation();
  return (
    <div className="mobile-menu">
      <div className=" mobile-menu__content">
        <Link
        onClick={closeFn}
          to={"/"}
          className={`mobile-menu__item ${
            isStoreSelected(loc.pathname) && "mobile-menu__item-selected"
          }`}
        >
          Store
        </Link>
        <Link
        onClick={closeFn}
          to={"/cart"}
          className={`mobile-menu__item ${
            isCartSelected(loc.pathname) && "mobile-menu__item-selected"
          }`}
        >
          Cart
        </Link>
        <button className="mobile-menu__btn primary">Login</button>
      </div>
    </div>
  );
};

export default MobileMenu;
