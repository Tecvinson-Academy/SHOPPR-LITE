import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { API_BASE } from '../utils/constants';
import Loader from '../components/Loader';

export default function PostPage() {
  const { id } = useParams();
  const { data: post, loading, error } = useFetch(`${API_BASE}/posts/${id}`);

  if (loading) return <Loader />;
  if (error) return <div>Error loading post.</div>;
  if (!post) return <div>Post not found.</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}