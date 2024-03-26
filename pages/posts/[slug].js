import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>

      <PostContent post={props.post} />
    </>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFiles = getPostsFiles();
  const postPaths = postFiles.map((p) => ({
    params: {
      slug: p.replace(/\.md$/, ""),
    },
  }));
  return {
    // paths: [{ params: { slug: "" } }],
    // this is fine for the blog that has thousands of posts
    // paths: [],
    // fallback: "blocking",
    paths: postPaths,
    fallback: false,
  };
}

export default PostDetailPage;
