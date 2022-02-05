import React from 'react';
import { useRouter } from 'next/router';

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components';
import { getPosts, getPostDetails } from '../../services';
import { AdjacentPosts } from '../../sections';
import Head from 'next/head';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={`${post.excerpt} \n By - ${post.author.name}`} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={`${post.excerpt} \n By - ${post.author.name}`} />
      <meta property="og:image" content={post.featuredImage.url} />
      <meta property="og:url" content={`https://tribu8.vercel.app/post/${post.slug}`} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Tribu8" />
      <meta property="article:published_time" content={post.date} />
      <meta property="article:author" content={post.author.name} />
      <meta property="article:section" content={post.categories[0].name} />
      <link rel="icon" href={post.featuredImage.url} type="image/png" />
    </Head>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}