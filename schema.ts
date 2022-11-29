import { createSchema } from 'graphql-yoga'
import { books } from './src/data/books';
import { getBooksByIds } from './src/providers/book'; 
import * as DataLoader from "dataloader";

const bookLoader = new DataLoader(getBooksByIds);

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      book(id: ID!): Book!
      books: [Book!]!
    }
    type Book {
      id: ID!
      name: String!
      author: String!
      price: String!
      description: String!
    }
  `,
  resolvers: {
    Query: {
      book: (_, { id }) => ({ id }),
      books: () => books.map((d) => ({ id: d.id })),
    },
    Book: {
      name: async ({ id }) => {
        const { name } = await bookLoader.load(id);

        return name;
      },
      author: async ({ id }) => {
        const { author } = await bookLoader.load(id);

        return author;
      },
      price: async ({ id }) => {
        const { price } = await bookLoader.load(id);

        return price;
      },
      description: async ({ id }) => {
        const { description } = await bookLoader.load(id);

        return description;
      },
    },
  },
});