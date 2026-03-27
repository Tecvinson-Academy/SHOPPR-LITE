import { useLocation, Link } from 'react-router-dom';

export default function NotFoundPage() {
  const location = useLocation();
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>No match for <code>{location.pathname}</code></p>
      <Link to="/">Go Home</Link>
    </div>
  );
}