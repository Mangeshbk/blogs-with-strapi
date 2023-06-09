import Navbar from '@/components/navbar';
import { GET_ALL_POSTS } from '@/graphql/queries';
import Image from 'next/image';
import Link from 'next/link';
import { ApolloClient, InMemoryCache } from '@apollo/client';
// import apolloClient from '../utils/apolloClient';

// const getCms = () => {
//   return apolloClient.query({
//     query: GET_ALL_POSTS,
//     // variables: { countryCode, slug }
//   });
// };

export default async function Home() {
  let posts: any = [];

  const getData = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  //const url = 'http://127.0.0.1:1337/api/blog-posts';
  // const data = await getData(url);

  // const uri = 'http://127.0.0.1:1337/graphql';
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS,
  });

  posts = data.blogPosts.data;

  console.log('DATA', data.blogPosts.data);
  return (
    <main className='home'>
      <h1 className='text-3xl font-bold'>Welcome to the My blogs</h1>
      <p className='text-base'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a rutrum
        arcu. Aenean id nunc nec augue egestas fringilla.
      </p>
      <br />
      <h2 className='text-2xl font-bold'>All posts</h2>
      <br />
      {/* map post here */}
      {posts?.map((item: any, i: any) => {
        return (
          <Link href={item.attributes.urlSlug} key={i}>
            <div className='card'>
              <h3>{item.attributes.title}</h3>
              <p>{item.attributes.description}</p>
            </div>
          </Link>
        );
      })}
    </main>
  );
}

// 1. ServerSide rendering (SSR)  url, {cache: 'no-store'}
// 2. Staic Site Generation (SSG) url
// 3. Incremental Static Generation (ISR) url, {next: {revalidate: 10}}

// export async function getServerSideProps(context: any) {
//   console.log('CHECK');
//   // Fetch data from an API
//   const res = await fetch('https://example.com/data');
//   // const data = await res.json();
//   const data = '';

//   console.log('DATA', data);
//   // Pass data to the page via props
//   return {
//     props: {
//       data,
//     },
//   };
// }

// export async function getServerSideProps() {
//   console.log('CHECK');
//   // export async function getStaticProps() {
//   const client = new ApolloClient({
//     uri: 'http://localhost:1337/graphql',
//     cache: new InMemoryCache(),
//   });

//   console.log('CLIENT', client);

//   const { data } = await client.query({
//     query: GET_ALL_POSTS,
//   });

//   console.log('DATA', data);

//   return {
//     props: {
//       posts: data.blogPosts.data,
//     },
//   };
// }
//inside getServerSideProps/getStaticProps
