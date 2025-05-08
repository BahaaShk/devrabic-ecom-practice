import { Link, useLocation, useNavigate } from "react-router-dom";
import { isStoreSelected, isCartSelected } from "../../../utils/checkRoutes";
import { useContext } from "react";
import { MainContext } from "../../../utils/context";
import { signOutUser } from "../../../utils/firebaseFunctions";
import { ClipLoader } from "react-spinners";

const DesktopMenu = () => {
  const { user, loading } = useContext(MainContext);
  const loc = useLocation();
  const navigate = useNavigate();
  const signOut = async () => {
    await signOutUser();
  };
  return (
    <>
      <Link
        to={"/"}
        className={`navbar__right-side__item ${
          isStoreSelected(loc.pathname) && "navbar__right-side__item-selected"
        }`}
      >
        Store
      </Link>
      <Link
        to={"/cart"}
        className={`navbar__right-side__item ${
          isCartSelected(loc.pathname) && "navbar__right-side__item-selected"
        }`}
      >
        Cart
      </Link>
      {
      loading ? <ClipLoader
      color="black"
      size={40}
    />
      :
      user ? (
        <button onClick={signOut} className="navbar__right-side__btn primary">
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => navigate("/authenticate")}
          className="navbar__right-side__btn primary"
        >
          Login
        </button>
      )}
    </>
  );
};

export default DesktopMenu;
