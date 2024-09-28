// pages/posts/[postId].jsx

import Link from "next/link";

export default function Post({ post }) {
  return (
    <>
      <h1>Post {post.id}</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.slice(0, 10).map((post) => ({
    params: { postId: post.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
