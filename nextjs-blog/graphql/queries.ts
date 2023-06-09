import { gql } from '@apollo/client';

const GET_ALL_SLUG = gql`
  query {
    blogPosts {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  query {
    blogPosts {
      data {
        attributes {
          title
          description
          urlSlug
        }
      }
    }
  }
`;

// const GET_INDUVIDUAL_POST = gql`
//   query ($slug: String) {
//     blogPosts(filter: { urlSlug: { eq: $slug } }) {
//       data {
//         attributes {
//           title
//           content
//         }
//       }
//     }
//   }
// `;

const GET_INDUVIDUAL_POST = gql`
  query {
    blogPosts(filters: { urlSlug: { eq: "my-third-blog-post" } }) {
      data {
        attributes {
          title
          content
        }
      }
    }
  }
`;

export { GET_ALL_SLUG, GET_ALL_POSTS, GET_INDUVIDUAL_POST };
