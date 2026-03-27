import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.png';

export default function Header() {
  const { items } = useCart();
  return (
    <header className="header">
      <Link to="/"><img src={logo} alt="Shoppr" className="logo"/></Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/cart">
          Cart ({items.reduce((sum, i) => sum + i.qty, 0)})
        </NavLink>
      </nav>
    </header>
  );
}