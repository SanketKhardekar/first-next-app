import LayoutWrapper from "@/Layouts";
import Link from "next/link";
import React from "react";

const Post = () => {
  return (
    <LayoutWrapper>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <h1>Posts</h1>
      {[1, 2, 3, 4, 5].map((item) => (
        <Link href={`post/${item}`}>
          <h4>Post {item}</h4>
        </Link>
      ))}
    </LayoutWrapper>
  );
};

export default Post;
