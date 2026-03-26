import { useParams } from "react-router-dom";

function PostPage() {

  const { id } = useParams();

  return (
    <div style={{ padding: "40px" }}>

      <h1>📝 Blog Post</h1>

      <p>
        Viewing post ID: {id}
      </p>

    </div>
  );
}

export default PostPage;