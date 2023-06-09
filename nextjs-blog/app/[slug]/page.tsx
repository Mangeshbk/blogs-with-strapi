import { GET_ALL_SLUG, GET_INDUVIDUAL_POST } from '@/graphql/queries';
import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { MDXRemote } from 'next-mdx-remote';

export default async function Post({ params }: any) {
  console.log('CALL=============');
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    // cache: null,
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: GET_INDUVIDUAL_POST,
    variables: { slugUrl: params.slug },
  });

  const attrs = data.blogPosts.data[0].attributes;
  const html = await serialize(attrs.content);
  console.log('DATA', data);

  // const { data } = await client.query({ query: GET_ALL_SLUG });

  // const paths = data.blogPosts.data.map((post: any) => {
  //   return { params: { slug: post.attributes.urlSlug } };
  // });

  // console.log('PATH_DATA', params.slug);

  // const post = { title: attrs.title, content: html };
  // console.log('POST_DATA', post);
  const post: any = {};

  return (
    <div>
      <h1>Hello </h1>
      <h1>{attrs.title}</h1>
      {/* <p>{post.content}</p> */}
      {/* <MDXRemote {...html} /> */}
    </div>
  );
}

// export async function getStaticPaths() {
//   const { data } = await client.query({ query: GET_ALL_SLUG });

//   const paths = data.blogPosts.data.map((post: any) => {
//     return { params: { slug: post.attributes.urlSlug } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: any) {
//   const { data } = await client.query({
//     query: GET_INDUVIDUAL_POST,
//     variables: { slugUrl: params.slug },
//   });

//   const attrs = data.blogPosts.data[0].attributes;

//   const html = await serialize(attrs.content);

//   return {
//     props: {
//       post: {
//         title: attrs.title,
//         content: html,
//       },
//     },
//   };
// }
