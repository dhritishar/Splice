import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addComment($commentText: String!, $commentAuthor: String!) {
    addComment(commentText: $commentText, commentAuthor: $commentAuthor) {
      _id
      commentText
      commentAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;