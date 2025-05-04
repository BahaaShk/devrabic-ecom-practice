import { Link, useLocation } from 'react-router-dom'
import { isStoreSelected, isCartSelected } from '../../../utils/checkRoutes';

const DesktopMenu = () => {
  const loc = useLocation();
  return (
    <>
    <Link to={'/'} className={`navbar__right-side__item ${isStoreSelected(loc.pathname) && "navbar__right-side__item-selected"}`}>Store</Link>
    <Link to={'/cart'} className={`navbar__right-side__item ${isCartSelected(loc.pathname) && "navbar__right-side__item-selected"}`}>Cart</Link>
    <button className='navbar__right-side__btn primary'>Login</button>
    </>
  )
}

export default DesktopMenu