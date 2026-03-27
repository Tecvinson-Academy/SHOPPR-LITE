import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCart();
  return (
    <div className="cart-item">
      <img src={item.product.thumbnail} alt={item.product.title} />
      <div>
        <h4>{item.product.title}</h4>
        <p>${item.product.price.toFixed(2)}</p>
        <input
          type="number"
          min="1"
          value={item.qty}
          onChange={e => updateQty(item.product.id, Number(e.target.value))}
        />
        <button onClick={() => removeItem(item.product.id)}>Remove</button>
      </div>
    </div>
  );
}