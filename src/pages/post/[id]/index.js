import LayoutWrapper from "@/Layouts";
import { useRouter } from "next/router";
function Post(props) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <LayoutWrapper>
      <div>
        <h1>Post {id}</h1>
        <p>This is post {id}.</p>
      </div>
    </LayoutWrapper>
  );
}

export default Post;
