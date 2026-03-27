import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { API_BASE } from '../utils/constants';
import Loader from '../components/Loader';

export default function BlogPage() {
  const { data, loading, error } = useFetch(`${API_BASE}/posts?limit=30`);

  if (loading) return <Loader />;
  if (error) return <div>Error loading posts.</div>;

  return (
    <div>
      <h1>Blog</h1>
      {data?.posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body.substring(0, 100)}...</p>
          <Link to={`/blog/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}