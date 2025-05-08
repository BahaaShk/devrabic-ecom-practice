import { Link, useLocation, useNavigate } from "react-router-dom";
import { isStoreSelected, isCartSelected } from "../../../utils/checkRoutes";
import { useContext } from "react";
import { MainContext } from "../../../utils/context";
import { signOutUser } from "../../../utils/firebaseFunctions";

const MobileMenu = ({closeFn }) => {
  const loc = useLocation();
  const navigate = useNavigate()
  const {user, loading} = useContext(MainContext);
const signOut = async () => {
  await signOutUser()
}
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
        {
          loading ? <ClipLoader
          color="red"
          size={40}
        /> :
        user ? <button onClick={() =>{ signOut(); closeFn()}} className="mobile-menu__btn primary">Sign Out</button> : <button onClick={() =>{ navigate("/authenticate"); closeFn()}} className="mobile-menu__btn primary">Login</button>
        }
        
      </div>
    </div>
  );
};

export default MobileMenu;
