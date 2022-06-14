import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const typeDefs: DocumentNode = gql`
  scalar DateTime
  type Query {
    tests: [Test]
  }

  type Test {
    uid: ID!
    text: String!
  }
`;
